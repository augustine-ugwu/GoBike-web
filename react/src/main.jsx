import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./assets/contexts/ContextProvider";
import Router from "./Router";
import Navbar from "../src/assets/components/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextProvider>
            <ChakraProvider>
                <RouterProvider router={Router}>
                    <App />
                </RouterProvider>
            </ChakraProvider>
        </ContextProvider>
    </React.StrictMode>
);
