import React from "react";
import Navbar from "./Navbar/page";

import styles from './styles.module.css';

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className={styles.viewport}>{children}</main>
        </>
    );
};