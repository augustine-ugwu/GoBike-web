import {
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    Text,
    Checkbox,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../../axios-client";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const rememberMeRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setUser, setToken } = useStateContext();

    const [error, setError] = useState("");

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payLoad = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        setErrors(null);
        axiosClient
            .post("/login", payLoad)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({
                            email: [response.data.message],
                        });
                    }
                }
            });
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <Flex
                    height={"100vh"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Flex
                        direction={"column"}
                        p={12}
                        rounded={6}
                        maxWidth={"xl"}
                    >
                        <Heading mb={6} mx={"auto"}>
                            Log in
                        </Heading>
                        {errors && (
                            <div>
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </div>
                        )}
                        <FormControl>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                variant="filled"
                                mb={3}
                                type="email"
                                ref={emailRef}
                            />
                        </FormControl>

                        <FormControl>
                            <InputGroup>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    variant={"filled"}
                                    mb={3}
                                    type={show ? "text" : "password"}
                                    ref={passwordRef}
                                />
                                <InputRightElement width="3rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick}
                                    >
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <Checkbox
                            mb={6}
                            id="rememberMe"
                            name="rememberMe"
                            colorScheme="teal"
                            ref={rememberMeRef}
                        >
                            Remember me?
                        </Checkbox>
                        <Button type="submit" mb={6} colorScheme={"teal"}>
                            Log in
                        </Button>
                        <Text mx={"auto"} mb={2} fontWeight={600}>
                            Or
                        </Text>

                        <Text fontWeight={600} mx="auto">
                            <Link to="/signup">Click here to Sign up</Link>
                        </Text>
                    </Flex>
                </Flex>
            </form>
        </>
    );
};

export default Login;
