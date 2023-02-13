import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    Button,
    Avatar,
    VStack,
    Text,
    MenuDivider,
    Box,
    Flex,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../images/ADS.png";
import { useEffect } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import { useToast } from "@chakra-ui/react";

// All the routes excluded
const withouSidebarRoutes = ["/signup", "/login"];

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { user, setUser, token, setToken } = useStateContext();

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);

    const onLogout = (ev) => {
        ev.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    const { pathname } = useLocation();

    // Validates if the current pathname includes one the routes you want to hide the sidebar is present on the current url
    // If that's true render null instead of the sidebar

    if (withouSidebarRoutes.some((item) => pathname.includes(item)))
        return null;

    const toast = useToast();

    return (
        <div>
            <Flex
                px={{ base: 4 }}
                height="16"
                alignItems="center"
                bg={useColorModeValue("white", "gray.900")}
                borderBottomColor={useColorModeValue("gray.200", "gray.700")}
                justifyContent={{ base: "flex-end" }}
            >
                <Box mr={"auto"} ml={{ base: 2, md: "6em" }}>
                    <Link to="/">
                        <img src={Logo} width="140em" alt="" />
                    </Link>
                </Box>
                <HStack spacing={{ base: "4", md: "6" }}>
                    <Button variant={"unstyled"} onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Flex alignItems={"center"}>
                        <Menu>
                            <MenuButton
                                py={2}
                                transition="all 0.3s"
                                _focus={{ boxShadow: "none" }}
                            >
                                <HStack>
                                    <Avatar size={"sm"} />
                                    <VStack
                                        display={{ base: "flex" }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2"
                                    >
                                        <Text fontSize="sm">
                                            {user.username}
                                        </Text>
                                        <Text fontSize="xs" color="gray.600">
                                            Welcome
                                        </Text>
                                    </VStack>
                                    <Box display={{ base: "flex" }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList
                                bg={useColorModeValue("white", "gray.900")}
                                borderColor={useColorModeValue(
                                    "gray.200",
                                    "gray.700"
                                )}
                            >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuDivider />
                                <MenuItem
                                    fontWeight={600}
                                    onClick={onLogout}
                                    // onClick={() =>
                                    //     toast({
                                    //         title: "Logout Successful.",
                                    //         description:
                                    //             "You've logged out successfully.",
                                    //         status: "success",
                                    //         duration: 3000,
                                    //         isClosable: true,
                                    //         variant: "customSuccess",
                                    //     })
                                    // }
                                >
                                    Sign out
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack>
            </Flex>
        </div>
    );
};

export default Navbar;
