import React from "react";
import styles from '../../styles/components/LandingPage.module.css';

export default function LandingAbout() {
    return (
        <div className={styles['about-container']}>
            <div className={styles['about-content']}>
                <h2>OUR MISSION & VISION</h2>
                <h1>About Discover Lincoln</h1>
                <p>
                    We believe in the power of unity, and our platform serves as a digital bridge 
                    that brings together local businesses and the Lincoln community. Our goal is simple: to 
                    showcase the best that Lincoln has to offer, from its hidden gems to its well-loved landmarks. 
                    By providing a platform where businesses can shine and residents can discover, we aspire to boost 
                    local tourism, support economic growth, and foster a strong sense of community.
                </p>
                <p>
                    Join us on this journey to explore, connect, and celebrate all that Lincoln represents. Together, 
                    we can create a thriving and dynamic city where businesses thrive, residents flourish, and visitors 
                    leave with cherished memories of their time in our remarkable city.
                </p>
            </div>
        </div>
    );
}