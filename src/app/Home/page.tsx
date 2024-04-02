import React from "react";
import SelfIntroduction from "./SelfIntroduction/page";

import '/src/app/globals.css';

export default function Home() {
    return (
        <main className="full-width">
            <SelfIntroduction />
        </main>
    );
};