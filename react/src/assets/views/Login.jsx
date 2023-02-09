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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const onSubmit = (ev) => {
        ev.preventDefault();
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
                        <FormControl>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                variant="filled"
                                mb={3}
                                type="email"
                                onChange={handleChange}
                                value={data.email}
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
                                    onChange={handleChange}
                                    value={data.password}
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
                            onChange={handleChange}
                            value={data.rememberMe}
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

export default Signup;
