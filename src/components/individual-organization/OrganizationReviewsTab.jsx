import React from 'react';
import styles from '../../styles/components/ReviewsTab.module.css';
import StarRating from '../StarRating';
import RatingCard from './RatingCard';
import OrganizationReviewForm from './OrganizationReviewForm.js';

function calculateAverageRating(data) {
  if (!data || !data.data || data.data.length === 0) {
      return 0; 
  }

  let totalRating = 0;
  data.data.forEach(review => {
      totalRating += review.attributes.rating;
  });

  const averageRating = Math.floor(totalRating / data.data.length);
  console.log("average rating", averageRating)
  return averageRating;
}

export default function OrganizationReviewsTab({ reviews, id }) {

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <h1>Reviews</h1>
        <div className={styles['average-rating']}>
          <h2>Average Rating</h2>
          <StarRating className={styles['stars']} rating={calculateAverageRating(reviews)}/>
        </div>
      </div>
      <div className={styles['ratings-container']}>
        {reviews.data.map(review => (
          <RatingCard 
            key={review.id}
            fullName={review.attributes.name}
            rating={review.attributes.rating}
            content={review.attributes.content}
            createdAt={review.attributes.createdAt}
          />
        ))}
      </div>
        <OrganizationReviewForm id={id}/>
    </div>
  );
};

