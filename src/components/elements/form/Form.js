import React from "react";
import Input from "../../elements/input/Input";
import "./form.css";
import "../button/Button";

const Form = ({ notFinished, onChangeEducationHandler, component }) => {
  return (
    <div className="form-container">
      <label htmlFor="Institution">Name of Institution</label>
      <Input
        type="text"
        id="Institution"
        placeholder="National University of La Plata"
        onChange={e =>
          onChangeEducationHandler(e, "nameOfInstitution", component)
        }
      />
      <label htmlFor="degree">Degree</label>
      <Input
        type="text"
        id="degree"
        placeholder="Software Engineer"
        onChange={e => onChangeEducationHandler(e, "degree", component)}
      />
      <label htmlFor="start-date">Start Date</label>
      <Input
        type="date"
        id="start-date"
        onChange={e => onChangeEducationHandler(e, "startDate", component)}
      />
      <label htmlFor="end-date">End Date</label>

      <div className="end-date">
        {!notFinished ? (
          <Input
            type="date"
            id="end-date"
            onChange={e => onChangeEducationHandler(e, "endDate", component)}
          />
        ) : null}

        <span htmlFor="currentWorkplace">Not Finished</span>
        <Input
          type="checkbox"
          id="currentWorkplace"
          onChange={e => onChangeEducationHandler(e, "finished", component)}
        />
      </div>
    </div>
  );
};

export default Form;
