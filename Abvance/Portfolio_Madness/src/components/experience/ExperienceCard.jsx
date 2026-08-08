import React from "react";

function ExperienceCard({ image, title, description }) {
  return (
    <div className="vertical">
      <img className="image-top" src={image} alt="" />

      <div className="vertical-title">
        {title}
      </div>

      <div className="vertical-desc">
        {description}
      </div>
    </div>
  );
}

export default ExperienceCard;