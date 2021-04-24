import React from "react";
import { formatFunction } from "../../../utils/utils";
import "./card.css";

const Card = ({
  nameOfInstitution,
  degree,
  startDate,
  endDate,
  description = ""
}) => {
  return (
    <div className="card-container">
      <div className="card-heading">
        <>
          <h5 className="profession-education">
            {degree} <span>({nameOfInstitution})</span>
          </h5>
          <p className="date">
            {formatFunction(startDate)} |{" "}
            {endDate === "present" ? "present" : formatFunction(endDate)}
          </p>{" "}
          {!description ? null : (
            <div className="job-description">
              <p>{description}</p>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Card;
