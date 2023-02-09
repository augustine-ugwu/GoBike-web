import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/homepage" />;
    }
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
