import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useToast } from "@chakra-ui/react";

const GuestLayout = () => {
    const { token } = useStateContext();
    const toast = useToast();
    const id = "test-toast";

    if (token) {
        if (!toast.isActive(id)) {
            toast({
                id,
                title: "Login Successful.",
                description: "You've logged in successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }

        return <Navigate to="/" />;
    }
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
