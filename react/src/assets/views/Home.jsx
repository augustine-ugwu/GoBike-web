import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Pickup from "../components/Pickup";

const Home = () => {
    return (
        <>
            <Box minH="92vh" bg={useColorModeValue("gray.300", "gray.900")}>
                <Pickup />
            </Box>
        </>
    );
};

export default Home;
