import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import PickupTime from "../components/PickupTime";

const Confirmation = () => {
    return (
        <>
            <Box minH="92vh" bg={useColorModeValue("gray.300", "gray.900")}>
                <PickupTime />
            </Box>
        </>
    );
};

export default Confirmation;
