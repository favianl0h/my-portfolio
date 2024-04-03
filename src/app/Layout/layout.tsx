import React from "react";
import Navbar from "./Navbar/page";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main style={{ marginTop:'80px', }}>{children}</main>
        </>
    );
};