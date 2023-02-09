import React, { ReactNode, useState } from "react";
import {
    Button,
    Avatar,
    Box,
    Flex,
    HStack,
    VStack,
    useColorModeValue,
    Text,
    useDisclosure,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    useColorMode,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../images/ADS.png";

// All the routes you want to exclude
const withouSidebarRoutes = ["/signup", "/login"];

export default function SidebarWithHeader({
    children,
}: {
    children: ReactNode;
}) {
    const { onOpen } = useDisclosure();

    const { pathname } = useLocation();

    // Validates if the current pathname includes one the routes you want to hide the sidebar is present on the current url
    // If that's true render null instead of the sidebar

    if (withouSidebarRoutes.some((item) => pathname.includes(item)))
        return null;

    return (
        <Box>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }}>{children}</Box>
        </Box>
    );
}

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [user, setUser] = useState({
        name: "John Snow",
    });

    const onLogout = (ev) => {
        ev.preventDefault();
    };

    return (
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
                                    <Text fontSize="sm">{user.name}</Text>
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
                            <MenuItem fontWeight={600} onClick={onLogout}>
                                Sign out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};
