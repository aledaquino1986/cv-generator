import React, { Component } from "react";
import Button from "../../elements/button/Button";
import EducationForm from "./EducationForm";
import Card from "../../elements/card/Card";

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
        endDate: ""
      },

      educationList: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.education);
  };

  onChangeEducationHandler = (e, typeOfStateProperty) => {
    const { value } = e.target;

    const {
      nameOfInstitution,
      degree,
      startDate,
      endDate
    } = this.state.education;

    if (typeOfStateProperty === "nameOfInstitution") {
      this.setState({
        education: {
          nameOfInstitution: value,
          degree,
          startDate,
          endDate
        }
      });
    } else if (typeOfStateProperty === "degree") {
      this.setState({
        education: {
          nameOfInstitution,
          degree: value,
          startDate,
          endDate
        }
      });
    } else if (typeOfStateProperty === "startDate") {
      this.setState({
        education: {
          nameOfInstitution,
          degree,
          startDate: value,
          endDate
        }
      });
    } else if (typeOfStateProperty === "endDate") {
      this.setState({
        education: {
          nameOfInstitution,
          degree,
          startDate,
          endDate: value
        }
      });
    }
  };

  onFormSubmission = e => {
    e.preventDefault();

    const {
      nameOfInstitution,
      degree,
      startDate,
      endDate
    } = this.state.education;

    const copyOfEducationList = [...this.state.educationList];

    copyOfEducationList.push(this.state.education);

    console.log(this.state.education);

    if (!nameOfInstitution || !degree || !startDate || !endDate) {
      return alert("Los campos estan vacios");
    }
    console.log("finished submitting");

    this.setState({
      isDisabled: !this.state.isDisabled,
      education: {
        nameOfInstitution: "",
        degree: "",
        startDate: "",
        endDate: ""
      },
      educationList: copyOfEducationList
    });
  };
  render() {
    return (
      <section className="section-heading">
        <h3 className="section-heading__education">Education</h3>

        {this.state.educationList.map(education => {
          const { nameOfInstitution, degree, startDate, endDate } = education;
          return (
            <>
              <Card
                nameOfInstitution={nameOfInstitution}
                degree={degree}
                startDate={startDate}
                endDate={endDate}
              />
            </>
          );
        })}

        {this.state.isDisabled && (
          <>
            <EducationForm
              nameOfInstitution={this.state.education.nameOfInstitution}
              degree={this.state.education.degree}
              startDate={this.state.education.startDate}
              endDate={this.state.education.endDate}
              onChangeEducationHandler={this.onChangeEducationHandler}
            />
          </>
        )}

        <Button
          onClick={() =>
            this.setState({
              isDisabled: !this.state.isDisabled
            })
          }
          text="Add new degree"
          isDisabled={this.state.isDisabled}
          className={this.state.isDisabled ? "disabled" : null}
        />

        <Button
          onClick={this.onFormSubmission}
          text="Finish current degree"
          type="submit"
        />
      </section>
    );
  }
}

export default Education;
