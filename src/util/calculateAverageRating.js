export default function calculateAverageRating(reviews) {

    let total = 0;
    reviews.forEach(review => {
        total += review.attributes.rating;
    });
    return Math.round(total / reviews.length);
}