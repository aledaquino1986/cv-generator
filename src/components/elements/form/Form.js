import React from "react";
import Input from "../../elements/input/Input";

import "./form.css";
import "../button/Button";

const Form = ({
  notFinished,
  onChangeWorkEducationHandler,
  component,
  placeOfWorkStudy,
  workEducationPlaceholder,
  jobDegreeTitle,
  titleOrDegree,
  description = null
}) => {
  return (
    <div className="form-container">
      <label htmlFor={placeOfWorkStudy}>{placeOfWorkStudy}</label>
      <Input
        type="text"
        id={placeOfWorkStudy}
        placeholder={workEducationPlaceholder}
        onChange={e =>
          onChangeWorkEducationHandler(e, "nameOfInstitution", component)
        }
      />
      <label htmlFor={titleOrDegree}>{titleOrDegree}</label>
      <Input
        type="text"
        id={titleOrDegree}
        placeholder={jobDegreeTitle}
        onChange={e => onChangeWorkEducationHandler(e, "degree", component)}
      />
      <label htmlFor="start-date">Start Date</label>
      <Input
        type="date"
        id="start-date"
        onChange={e => onChangeWorkEducationHandler(e, "startDate", component)}
      />
      <label htmlFor="end-date">End Date</label>

      <div className="end-date">
        {!notFinished ? (
          <Input
            type="date"
            id="end-date"
            onChange={e =>
              onChangeWorkEducationHandler(e, "endDate", component)
            }
          />
        ) : null}

        <span htmlFor="currentWorkplace">Not Finished</span>
        <Input
          type="checkbox"
          id="currentWorkplace"
          onChange={e => onChangeWorkEducationHandler(e, "finished", component)}
        />
      </div>

      {!description ? null : (
        <>
          <label htmlFor="description">Description</label>
          <Input
            type="textarea"
            id="description"
            onChange={e =>
              onChangeWorkEducationHandler(e, "description", component)
            }
          />
        </>
      )}
    </div>
  );
};

export default Form;
