import React from "react";

import styles from './styles.module.css';
import '/src/app/globals.css';

export default function Navbar() {
    return (
        <div className={`${styles.navbar} full-width row white-black`}>
            {/* Left Section -- Name & Logo */}
            <div className={`${styles.logoName} flex-center-children row`}>
                <h2>favianl0h</h2>
            </div>

            {/* Right Section -- Buttons */}
            <div className={`${styles.navbarContents} row`}>
                <div className={`${styles.contactButton} flex-center-children black-white`}>
                    <h3 className={styles.navbarButton}>Contact</h3>
                </div>
                <h2  className={styles.navbarButton}>Passions</h2>
                <h2  className={styles.navbarButton}>Academic</h2>
                <h2  className={styles.navbarButton}>Now</h2>
                <h2  className={styles.navbarButton}>About</h2>
            </div>
        </div>
    );
};