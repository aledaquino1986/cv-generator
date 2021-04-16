import React, { Component } from "react";
import Button from "../../elements/button/Button";
import Form from "../../elements/form/Form";
import Card from "../../elements/card/Card";
import "../education/education.css";
import {
  disableButton,
  onChangeWorkEducationHandler,
  onFormSubmission
} from "../../../utils/stateUtils";

class Workexperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,

      work: {
        nameOfInstitution: "",
        degree: "",
        startDate: "",
        endDate: "",
        notFinished: false
      },

      workList: []
    };
  }

  render() {
    return (
      <section className="section-heading">
        <h3 className="section-heading__education">Work Experience</h3>

        {this.state.workList.map(work => {
          const { nameOfInstitution, degree, startDate, endDate } = work;
          return (
            <div key={work.degree}>
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
              notFinished={this.state.work.notFinished}
              onChangeWorkEducationHandler={onChangeWorkEducationHandler}
              component={this}
              placeOfWorkStudy="Company Name"
              workEducationPlaceholder="Google"
              jobDegreeTitle="Software Engineer"
              titleOrDegree="Job Title"
            />
          </>
        )}
        <>
          <Button
            onClick={() => disableButton(this)}
            text="Add new job"
            isDisabled={this.state.isDisabled}
            className={this.state.isDisabled ? "disabled" : null}
          />

          <Button
            onClick={e => onFormSubmission(e, this)}
            text="Finish current job"
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

export default Workexperience;
