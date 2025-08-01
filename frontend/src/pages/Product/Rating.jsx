import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
const Rating = ({ value, text, color }) => {
  const fullStars = Math.floor(value);
  const halfStars = value - fullStars > 0.5 ? 1 : 0;
  const emptyStar = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center text-white">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className={`text-${color} ml-1`} />
      ))}

      {halfStars === 1 && <FaStarHalfAlt className={`text-${color} ml-1`} />}
      {[...Array(emptyStar)].map((_, index) => (
        <FaRegStar key={index} className={`text-${color} ml-1`} />
      ))}

      <span className={`rating-text ml-{2rem} text-${color}`}>
        {text && text}
      </span>
    </div>
  );
};
Rating.defaultProps = {
  color: "yellow-500",
};

export default Rating;
