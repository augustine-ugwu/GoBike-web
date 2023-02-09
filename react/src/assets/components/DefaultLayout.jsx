import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "../components/Navbar";

const DefaultLayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
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
