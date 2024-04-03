import React from "react";
import Image from "next/image";

import styles from './styles.module.css';
import '/src/app/globals.css';

export default function SelfIntroduction() {
    const me: String = "I'm Favian from Singapore! 🇸🇬 I developed this website myself, and was my first interaction with React, Javascript, HTML and CSS! Aside from Web Dev. and App Dev., I'm also keen on robotics due to its hardware and software aspects.";

    return (
        <div className={`${styles.section} row`}>
            {/* Text */}
            <div className={`${styles.left} flex-center-children`}>
                <div className={styles.texts}>
                    <h1 className={styles.title}>Hi there!</h1>
                    <p>{me}</p>
                </div>
            </div>

            {/* My Picture */}
            <div className={`${styles.right} black-white flex-center-children`}>
                <Image src="/IMG_2824.JPG" alt="8059A SingNats Robot" width={360} height={640} className={styles.pictureContainer} />
            </div>
        </div>
    );
};