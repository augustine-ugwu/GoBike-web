import React from "react";
import Login from "./assets/views/Login";
import Signup from "./assets/views/SignUp";
import Confirmation from "./assets/views/Confirmation";
import NotFound from "./assets/views/NotFound";
import GuestLayout from "./assets/components/GuestLayout";
import DefaultLayout from "./assets/components/DefaultLayout";
import Users from "./assets/views/Users";
import Dashboard from "./assets/views/Dashboard";
import Home from "./assets/views/Home";

import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/confirmbooking",
                element: <Confirmation />,
            },
        ],
    },

    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default Router;
