import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import PickupTime from "../components/PickupTime";

const Dashboard = () => {
    return (
        <div>
            <Box minH="92vh" bg={useColorModeValue("gray.300", "gray.900")}>
                <PickupTime />
            </Box>
        </div>
    );
};

export default Dashboard;
