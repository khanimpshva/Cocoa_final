
import React from "react";
import profilePng from "../../../src/media/Profile_avatar_placeholder_large.png";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({review}) => {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "#1A1A1A",
        size: window.innerWidth < 600 ? 20 : 25,
        value: review.rating,
        isHalf: true,
      }

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;