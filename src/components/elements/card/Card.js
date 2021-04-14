import React from "react";
import "./card.css";

const Card = ({ nameOfInstitution, degree, startDate, endDate }) => {
  return (
    <div className="card-container">
      <p>{nameOfInstitution}</p>
      <p>{degree}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </div>
  );
};

export default Card;
