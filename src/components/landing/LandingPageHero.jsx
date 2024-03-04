import React from "react";
import styles from '../../styles/components/LandingPage.module.css';

export default function LandingHero() {
    return (
        <div>
            <div className={styles['container']}>
                <img className={styles['hero-bg']} src="/images/heroBG.jpeg" />
                <div className={styles['content']}>
                    <div className={styles['main-heading']}>
                        <h1 className={styles['lincoln-heading'] + " mr-6"}>Discover</h1>
                        <h1 className={styles['lincoln-heading']}>Lincoln</h1>
                    </div>
                    {/* <img className={styles['cut-out']} src="/images/women-cut-out.png" /> */}
                    <h2 className={styles['sub-heading'] + " !font-roboto-slab-bold !text-3xl max-w-[70%] text-center"}>Your Gateway to Lincoln: Create Events, Connect with Community, and Explore Endless Possibilities</h2>
                    <div className={styles['button-group']}>
                        <button>Create Event</button>
                        <button>Log In</button>
                    </div>
                </div>
            </div>
            <div className={styles['bottom-container']}>
                <div className={styles['row']}>
                    <div className={styles['col']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
                            <path d="M40.5 70C57.0685 70 70.5 56.5685 70.5 40C70.5 23.4315 57.0685 10 40.5 10C23.9315 10 10.5 23.4315 10.5 40C10.5 56.5685 23.9315 70 40.5 70Z" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M38.19 32.4633L50.5 30L48.0367 42.31C47.7788 43.6002 47.1449 44.7853 46.2148 45.716C45.2848 46.6467 44.1001 47.2813 42.81 47.54L30.5 50L32.9633 37.69C33.2218 36.4004 33.8559 35.216 34.786 34.286C35.716 33.3559 36.9004 32.7218 38.19 32.4633Z" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h3>Discover Lincoln</h3>
                        <p>Embark on a journey to explore Lincoln&apos;s vibrant culture, landmarks, and unique experiences, all at your fingertips.</p>
                    </div>
                    <div className={styles['col']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
                            <path d="M48.8333 60.0001C46.5 60.0001 44.5278 59.1945 42.9167 57.5834C41.3056 55.9723 40.5 54.0001 40.5 51.6667C40.5 49.3334 41.3056 47.3612 42.9167 45.7501C44.5278 44.139 46.5 43.3334 48.8333 43.3334C51.1667 43.3334 53.1389 44.139 54.75 45.7501C56.3611 47.3612 57.1667 49.3334 57.1667 51.6667C57.1667 54.0001 56.3611 55.9723 54.75 57.5834C53.1389 59.1945 51.1667 60.0001 48.8333 60.0001ZM17.1667 73.3334C15.3333 73.3334 13.7644 72.6812 12.46 71.3767C11.1556 70.0723 10.5022 68.5023 10.5 66.6667V20.0001C10.5 18.1667 11.1533 16.5979 12.46 15.2934C13.7667 13.989 15.3356 13.3356 17.1667 13.3334H20.5V6.66675H27.1667V13.3334H53.8333V6.66675H60.5V13.3334H63.8333C65.6667 13.3334 67.2367 13.9867 68.5433 15.2934C69.85 16.6001 70.5022 18.169 70.5 20.0001V66.6667C70.5 68.5001 69.8478 70.0701 68.5433 71.3767C67.2389 72.6834 65.6689 73.3356 63.8333 73.3334H17.1667ZM17.1667 66.6667H63.8333V33.3334H17.1667V66.6667Z" fill="white"/>
                            <path d="M46.6943 12.0251L43.5335 15.1859L36.9869 8.63936L40.1477 5.47858L40.1492 5.47712C40.1947 5.43151 40.2487 5.39533 40.3082 5.37065C40.3678 5.34596 40.4316 5.33325 40.496 5.33325C40.5604 5.33325 40.6242 5.34596 40.6837 5.37065C40.7433 5.39533 40.7973 5.43151 40.8428 5.47713L40.8443 5.47858L46.6943 11.3286L46.6957 11.33C46.7413 11.3755 46.7775 11.4296 46.8022 11.4891C46.8269 11.5486 46.8396 11.6124 46.8396 11.6769C46.8396 11.7413 46.8269 11.8051 46.8022 11.8646C46.7775 11.9241 46.7413 11.9782 46.6957 12.0237L46.6943 12.0251ZM12.3801 46.3394H5.8335V39.7928L31.4835 14.1428L38.0301 20.6894L12.3801 46.3394Z" fill="#102E1E" stroke="white" stroke-width="4"/>
                            <rect x="22.9404" y="25.5122" width="5.27504" height="15.8638" transform="rotate(44.5939 22.9404 25.5122)" fill="#102E1E"/>
                        </svg>
                        <h3>Create Events</h3>
                        <p>Empower your event planning - effortlessly create, manage, and promote local happenings, making your mark on Lincoln.</p>
                    </div>
                    <div className={styles['col']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
                            <g clip-path="url(#clip0_352_3614)">
                                <path d="M23.8335 60V56.6667C23.8335 52.2464 25.5894 48.0072 28.715 44.8816C31.8407 41.7559 36.0799 40 40.5002 40M40.5002 40C44.9204 40 49.1597 41.7559 52.2853 44.8816C55.4109 48.0072 57.1668 52.2464 57.1668 56.6667V60M40.5002 40C43.1523 40 45.6959 38.9464 47.5712 37.0711C49.4466 35.1957 50.5002 32.6522 50.5002 30C50.5002 27.3478 49.4466 24.8043 47.5712 22.9289C45.6959 21.0536 43.1523 20 40.5002 20C37.848 20 35.3045 21.0536 33.4291 22.9289C31.5537 24.8043 30.5002 27.3478 30.5002 30C30.5002 32.6522 31.5537 35.1957 33.4291 37.0711C35.3045 38.9464 37.848 40 40.5002 40ZM3.8335 60V56.6667C3.8335 54.0145 4.88706 51.471 6.76243 49.5956C8.63779 47.7202 11.1813 46.6667 13.8335 46.6667M13.8335 46.6667C15.6016 46.6667 17.2973 45.9643 18.5475 44.714C19.7978 43.4638 20.5002 41.7681 20.5002 40C20.5002 38.2319 19.7978 36.5362 18.5475 35.286C17.2973 34.0357 15.6016 33.3333 13.8335 33.3333C12.0654 33.3333 10.3697 34.0357 9.11945 35.286C7.86921 36.5362 7.16683 38.2319 7.16683 40C7.16683 41.7681 7.86921 43.4638 9.11945 44.714C10.3697 45.9643 12.0654 46.6667 13.8335 46.6667ZM77.1668 60V56.6667C77.1668 54.0145 76.1133 51.471 74.2379 49.5956C72.3625 47.7202 69.819 46.6667 67.1668 46.6667M67.1668 46.6667C68.9349 46.6667 70.6306 45.9643 71.8809 44.714C73.1311 43.4638 73.8335 41.7681 73.8335 40C73.8335 38.2319 73.1311 36.5362 71.8809 35.286C70.6306 34.0357 68.9349 33.3333 67.1668 33.3333C65.3987 33.3333 63.703 34.0357 62.4528 35.286C61.2025 36.5362 60.5002 38.2319 60.5002 40C60.5002 41.7681 61.2025 43.4638 62.4528 44.714C63.703 45.9643 65.3987 46.6667 67.1668 46.6667Z" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_352_3614">
                                <rect width="80" height="80" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <h3>Community</h3>
                        <p>Connect with the heart of Lincoln&apos;s community, share stories, forge friendships, and be part of something truly special.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}