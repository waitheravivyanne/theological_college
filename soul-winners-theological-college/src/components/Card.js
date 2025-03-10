import React from "react";
import imageSrc from "./assets/your-image.jpg"; // Import the image

const Card = () => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Program" />
      <div className="card-content">
        <h3>Bachelor of Theology</h3>
        <p>Equip yourself with the knowledge and skills to serve in global ministry.</p>
        <button className="btn-secondary">Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
