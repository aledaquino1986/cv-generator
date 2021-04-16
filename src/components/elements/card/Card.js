import React from "react";
import { formatFunction } from "../../../utils/utils";
import "./card.css";

const Card = ({ nameOfInstitution, degree, startDate, endDate }) => {
  return (
    <div className="card-container">
      <div className="card-heading">
        <ul>
          <li>
            {" "}
            <h5 className="profession-education">
              {" "}
              {degree} <span>({nameOfInstitution})</span>
            </h5>{" "}
            <p className="date">
              {" "}
              {formatFunction(startDate)} | {formatFunction(endDate)}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
