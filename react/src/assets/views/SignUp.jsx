import {
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    Text,
    InputGroup,
    InputRightElement,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axiosClient from "../../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
    const nameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErrors] = useState(null);

    const { setUser, setToken } = useStateContext();

    // Turn on or off (Hide Password)
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const handleClick1 = () => setShow1(!show1);
    const handleClick2 = () => setShow2(!show2);

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payLoad = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };
        console.log(payLoad);
        axiosClient
            .post("/signup", payLoad)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };

    const toast = useToast();
    const positions = ["top"];

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
                            Create Account
                        </Heading>
                        {errors && (
                            <Alert status="error" variant="top-accent">
                                <AlertIcon />
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </Alert>
                        )}
                        <FormControl>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter Your Name"
                                variant="filled"
                                mb={3}
                                type="text"
                                ref={nameRef}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                id="username"
                                name="username"
                                placeholder="Enter Username"
                                variant="filled"
                                mb={3}
                                type="text"
                                ref={usernameRef}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Enter email"
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
                                    type={show1 ? "text" : "password"}
                                    ref={passwordRef}
                                />
                                <InputRightElement width="3rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick1}
                                    >
                                        {show1 ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <InputGroup>
                                <Input
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    placeholder="Confirm Password"
                                    variant={"filled"}
                                    mb={3}
                                    type={show2 ? "text" : "password"}
                                    ref={passwordConfirmationRef}
                                />
                                <InputRightElement width="3rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick2}
                                    >
                                        {show2 ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <Button
                            type="submit"
                            mb={6}
                            colorScheme={"teal"}
                            onClick={onSubmit}
                            // onClick={() =>
                            //     toast({
                            //         title: "Account created.",
                            //         description:
                            //             "We've created your account for you.",
                            //         status: "success",
                            //         position: position,
                            //         duration: 9000,
                            //         isClosable: true,
                            //     })
                            // }
                        >
                            Sign up
                        </Button>
                        <Text
                            mx={"auto"}
                            mb={2}
                            fontWeight={600}
                            decoration="underline"
                        >
                            Already have an account?
                        </Text>
                        <Text fontWeight={600} mx="auto">
                            <Link to="/login">Click here to Log in</Link>
                        </Text>
                    </Flex>
                </Flex>
            </form>
        </>
    );
};

export default Signup;

// import {
//     Button,
//     Flex,
//     FormControl,
//     Heading,
//     Input,
//     Text,
//     InputGroup,
//     InputRightElement,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

// const Signup = () => {
//     const [data, setData] = useState({
//         firstname: "",
//         lastname: "",
//         email: "",
//         password: "",
//         confirmpassword: "",
//         rememberMe: false,
//     });

//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = ({ currentTarget: input }) => {
//         setData({ ...data, [input.name]: input.value });
//     };

//     // Turn on or off (Hide Password)
//     const [show1, setShow1] = React.useState(false);
//     const [show2, setShow2] = React.useState(false);
//     const handleClick1 = () => setShow1(!show1);
//     const handleClick2 = () => setShow2(!show2);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http:/localhost:8000/api";
//             const { data: res } = await axios.post(url, data);
//             navigate("/login");
//             console.log(res.message);
//         } catch (error) {
//             if (
//                 error.response &&
//                 error.response.status >= 400 &&
//                 error.response.status <= 500
//             ) {
//                 setError(error.response.data.message);
//             }
//         }
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <Flex
//                     height={"100vh"}
//                     alignItems={"center"}
//                     justifyContent={"center"}
//                 >
//                     <Flex
//                         direction={"column"}
//                         p={12}
//                         rounded={6}
//                         maxWidth={"xl"}
//                     >
//                         <Heading mb={6} mx={"auto"}>
//                             Create Account
//                         </Heading>
//                         <FormControl>
//                             <Input
//                                 id="fname"
//                                 name="firstname"
//                                 placeholder="First Name"
//                                 variant="filled"
//                                 mb={3}
//                                 type="text"
//                                 required
//                                 onChange={handleChange}
//                                 value={data.firstname}
//                             />
//                         </FormControl>
//                         <FormControl>
//                             <Input
//                                 id="lname"
//                                 name="lastname"
//                                 placeholder="Last Name"
//                                 variant="filled"
//                                 mb={3}
//                                 type="text"
//                                 required
//                                 onChange={handleChange}
//                                 value={data.lastname}
//                             />
//                         </FormControl>
//                         <FormControl>
//                             <Input
//                                 id="email"
//                                 name="email"
//                                 placeholder="Enter email"
//                                 variant="filled"
//                                 mb={3}
//                                 type="email"
//                                 required
//                                 onChange={handleChange}
//                                 value={data.email}
//                             />
//                         </FormControl>
//                         <FormControl>
//                             <InputGroup>
//                                 <Input
//                                     id="password"
//                                     name="password"
//                                     placeholder="Enter Password"
//                                     variant={"filled"}
//                                     mb={3}
//                                     type={show1 ? "text" : "password"}
//                                     required
//                                     onChange={handleChange}
//                                     value={data.password}
//                                 />
//                                 <InputRightElement width="3rem">
//                                     <Button
//                                         h="1.75rem"
//                                         size="sm"
//                                         onClick={handleClick1}
//                                     >
//                                         {show1 ? <ViewOffIcon /> : <ViewIcon />}
//                                     </Button>
//                                 </InputRightElement>
//                             </InputGroup>
//                         </FormControl>
//                         <FormControl>
//                             <InputGroup>
//                                 <Input
//                                     id="confirmpassword"
//                                     name="confirmpassword"
//                                     placeholder="Confirm Password"
//                                     variant={"filled"}
//                                     mb={3}
//                                     type={show2 ? "text" : "password"}
//                                     required
//                                     onChange={handleChange}
//                                     value={data.confirmpassword}
//                                 />
//                                 <InputRightElement width="3rem">
//                                     <Button
//                                         h="1.75rem"
//                                         size="sm"
//                                         onClick={handleClick2}
//                                     >
//                                         {show2 ? <ViewOffIcon /> : <ViewIcon />}
//                                     </Button>
//                                 </InputRightElement>
//                             </InputGroup>
//                         </FormControl>

//                         {error && <div>{error}</div>}
//                         <Button type="submit" mb={6} colorScheme={"teal"}>
//                             Sign up
//                         </Button>
//                         <Text
//                             mx={"auto"}
//                             mb={2}
//                             fontWeight={600}
//                             decoration="underline"
//                         >
//                             Already have an account?
//                         </Text>
//                         <Text fontWeight={600} mx="auto">
//                             <Link to="/login">Click here to Log in</Link>
//                         </Text>
//                     </Flex>
//                 </Flex>
//             </form>
//         </>
//     );
// };

// export default Signup;
