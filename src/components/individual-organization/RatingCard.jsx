import react from "react";
import styles from '../../styles/components/ReviewsTab.module.css';
import Image from "next/image";
import StarRating from "../StarRating";

function splitName(fullName) {
    const nameParts = fullName.trim().split(' ');
  
    let firstName = '';
    let lastName = '';
  
    if (nameParts.length === 1) {
        firstName = nameParts[0];
        lastName = ' ';
    } else {
        firstName = nameParts[0];
        lastName = nameParts[1];
    }
  
    return { firstName, lastName };
}

function formatDate(dateString) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    let daySuffix;
    if (day % 10 === 1 && day !== 11) {
        daySuffix = 'st';
    } else if (day % 10 === 2 && day !== 12) {
        daySuffix = 'nd';
    } else if (day % 10 === 3 && day !== 13) {
        daySuffix = 'rd';
    } else {
        daySuffix = 'th';
    }

    return `${months[monthIndex]} ${day}${daySuffix}, ${year}`;
}

const RatingCard = ({ key, fullName, rating, content, createdAt }) => {
    const { firstName, lastName } = splitName(fullName);

    return (
        <div className={styles['card-container']}>
            <div className={styles['left-container']}>
                <div className={styles['display-container']}>
                    <Image src="/review-display-circle.svg" width="63" height="63" alt="Display Picture" className={styles['display-circle']} />
                    <h3 className={styles['intials']}>{firstName?.[0] || ""}{lastName?.[0] || ""}</h3>
                </div>
                <h4>{firstName + ' ' + lastName}</h4>
            </div>
            <div className={styles['right-container']}>
                <StarRating className={styles['stars']} rating={rating}/>
                <h6>Date: {formatDate(createdAt)}</h6>
                <p>{'"' + content + '"'}</p>
            </div>
        </div>
    );

};

export default RatingCard;