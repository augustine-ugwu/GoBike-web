import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Users = () => {
    return (
        <div>
            <Box minH="92vh" bg={useColorModeValue("gray.300", "gray.900")}>
                Hello World
            </Box>
        </div>
    );
};

export default Users;
