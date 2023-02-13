import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "../components/Navbar.jsx";
import { useToast } from "@chakra-ui/react";

const DefaultLayout = () => {
    const { user, token, setUser } = useStateContext();
    const toast = useToast();
    const id = "test-toast";

    // useEffect(() => {
    //     axiosClient.get("/user").then(({ data }) => {
    //         setUser(data);
    //     });
    // }, []);

    if (!token) {
        if (!toast.isActive(id)) {
            toast({
                id,
                title: "Log out Successful.",
                description: "You've logged out successfully.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }

        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
