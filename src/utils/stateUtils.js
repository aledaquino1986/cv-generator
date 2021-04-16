const disableButton = component => {
  component.setState({
    isDisabled: !component.state.isDisabled
  });
};

const onChangeEducationHandler = (e, stateKey, component) => {
  const { value } = e.target;

  const {
    nameOfInstitution,
    degree,
    startDate,
    endDate,
    notFinished
  } = component.state.education;

  if (stateKey === "nameOfInstitution") {
    component.setState({
      education: {
        nameOfInstitution: value,
        degree,
        startDate,
        endDate,
        notFinished
      }
    });
  } else if (stateKey === "degree") {
    component.setState({
      education: {
        nameOfInstitution,
        degree: value,
        startDate,
        endDate,
        notFinished
      }
    });
  } else if (stateKey === "startDate") {
    component.setState({
      education: {
        nameOfInstitution,
        degree,
        startDate: value,
        endDate,
        notFinished
      }
    });
  } else if (stateKey === "endDate") {
    component.setState({
      education: {
        nameOfInstitution,
        degree,
        startDate,
        endDate: value,
        notFinished
      }
    });
  } else if (stateKey === "finished") {
    component.setState({
      education: {
        nameOfInstitution,
        degree,
        startDate,
        endDate: !component.state.education.notFinished ? "present" : "",
        notFinished: !component.state.education.notFinished
      }
    });
  }
};

const onFormSubmission = (e, component) => {
  e.preventDefault();

  const {
    nameOfInstitution,
    degree,
    startDate,
    endDate
  } = component.state.education;

  const copyOfEducationList = [...component.state.educationList];

  copyOfEducationList.push(component.state.education);

  if (!nameOfInstitution || !degree || !startDate || !endDate) {
    return alert("Los campos estan vacios");
  }
  console.log("finished submitting");

  component.setState({
    isDisabled: !component.state.isDisabled,
    education: {
      nameOfInstitution: "",
      degree: "",
      startDate: "",
      endDate: ""
    },
    educationList: copyOfEducationList
  });
};

export { disableButton, onChangeEducationHandler, onFormSubmission };
