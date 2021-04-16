import React, { Component } from "react";
import Button from "../../elements/button/Button";
import Form from "../../elements/form/Form";
import Card from "../../elements/card/Card";

import {
  disableButton,
  onChangeWorkEducationHandler,
  onFormSubmission
} from "../../../utils/stateUtils";

import "./education.css";
class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,

      education: {
        nameOfInstitution: "",
        degree: "",
        startDate: "",
        endDate: "",
        notFinished: false
      },

      educationList: []
    };
  }

  render() {
    return (
      <section className="section-heading">
        <h3 className="section-heading__education">Education</h3>

        {this.state.educationList.map(education => {
          const { nameOfInstitution, degree, startDate, endDate } = education;
          return (
            <div key={education.degree}>
              <Card
                nameOfInstitution={nameOfInstitution}
                degree={degree}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          );
        })}

        {this.state.isDisabled && (
          <>
            <Form
              nameOfInstitution={this.state.education.nameOfInstitution}
              degree={this.state.education.degree}
              startDate={this.state.education.startDate}
              endDate={this.state.education.endDate}
              notFinished={this.state.education.notFinished}
              onChangeWorkEducationHandler={onChangeWorkEducationHandler}
              component={this}
              placeOfWorkStudy="Institution Name"
              workEducationPlaceholder="University of Illinois"
              jobDegreeTitle="Software developer"
              titleOrDegree="Degree"
            />
          </>
        )}
        <>
          <Button
            onClick={() => disableButton(this)}
            text="Add new degree"
            isDisabled={this.state.isDisabled}
            className={this.state.isDisabled ? "disabled" : null}
          />

          <Button
            onClick={e => onFormSubmission(e, this)}
            text="Finish current degree"
            type="submit"
            isDisabled={!this.state.isDisabled}
            className={!this.state.isDisabled ? "disabled" : null}
            component={this}
          />
        </>
      </section>
    );
  }
}

export default Education;
