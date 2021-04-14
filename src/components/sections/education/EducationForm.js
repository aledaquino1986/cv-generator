import React from "react";
import Input from "../../elements/input/Input";
import "./education.css";

const EducationForm = ({
  nameOfInstitution,
  degree,
  startDate,
  endDate,
  onChangeEducationHandler
}) => {
  return (
    <div className="form-container">
      <label htmlFor="Institution">Name of Institution</label>
      <Input
        type="text"
        id="Institution"
        placeholder="National University of La Plata"
        onChange={e => onChangeEducationHandler(e, "nameOfInstitution")}
      />
      <label htmlFor="degree">Degree</label>
      <Input
        type="text"
        id="degree"
        placeholder="Software Engineer"
        onChange={e => onChangeEducationHandler(e, "degree")}
      />
      <label htmlFor="start-date">Start Date</label>
      <Input
        type="date"
        id="start-date"
        onChange={e => onChangeEducationHandler(e, "startDate")}
      />
      <label htmlFor="end-date">End Date</label>
      <Input
        type="date"
        id="end-date"
        onChange={e => onChangeEducationHandler(e, "endDate")}
      />
    </div>
  );
};

export default EducationForm;
