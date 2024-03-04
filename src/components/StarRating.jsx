import React from 'react'

export default function StarRating(props) {
  // Ensure rating is a number and within the range 0-5
  const validRating = Math.max(0, Math.min(5, props.rating || 0));

  // Array for filled stars
  const myArr = Array(validRating).fill(0);

  // Array for unfilled stars
  const myArrNF = Array(5 - validRating).fill(0);

  return (
    <div>
      {myArr.map((element, index) => (
        <i key={`filled-${index}`} className={"fa-solid fa-star mr-0.5 text-lg " + props.className}></i>
      ))}
      {myArrNF.map((element, index) => (
        <i key={`unfilled-${index}`} className={"fa-solid fa-star  opacity-50 mr-0.5 text-lg " + props.className}></i>
      ))}
    </div>
  );
}
