import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Modal } from "./Modal";
import { Footer } from "./Footer";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
