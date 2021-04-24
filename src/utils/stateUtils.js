const disableButton = component => {
  component.setState({
    isDisabled: !component.state.isDisabled
  });
};

const onChangeWorkEducationHandler = (e, stateKey, component) => {
  const { value } = e.target;

  if (component.state.education) {
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
  } else if (component.state.work) {
    const {
      nameOfInstitution,
      degree,
      startDate,
      endDate,
      notFinished,
      description
    } = component.state.work;

    if (stateKey === "nameOfInstitution") {
      component.setState({
        work: {
          nameOfInstitution: value,
          degree,
          startDate,
          endDate,
          notFinished,
          description
        }
      });
    } else if (stateKey === "degree") {
      component.setState({
        work: {
          nameOfInstitution,
          degree: value,
          startDate,
          endDate,
          notFinished,
          description
        }
      });
    } else if (stateKey === "startDate") {
      component.setState({
        work: {
          nameOfInstitution,
          degree,
          startDate: value,
          endDate,
          notFinished,
          description
        }
      });
    } else if (stateKey === "endDate") {
      component.setState({
        work: {
          nameOfInstitution,
          degree,
          startDate,
          endDate: value,
          notFinished,
          description
        }
      });
    } else if (stateKey === "finished") {
      component.setState({
        work: {
          nameOfInstitution,
          degree,
          startDate,
          endDate: !component.state.work.notFinished ? "present" : "",
          notFinished: !component.state.work.notFinished,
          description
        }
      });
    } else if (stateKey === "description") {
      component.setState({
        work: {
          nameOfInstitution,
          degree,
          startDate,
          endDate,
          notFinished,
          description: value
        }
      });
    }
  }
};

const onFormSubmission = (e, component) => {
  e.preventDefault();

  if (component.state.education) {
    const {
      nameOfInstitution,
      degree,
      startDate,
      endDate
    } = component.state.education;

    const copyOfEducationList = [...component.state.educationList];

    copyOfEducationList.push(component.state.education);

    if (!nameOfInstitution || !degree || !startDate || !endDate) {
      return alert("Please fill out all the input fields");
    }

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
  } else if (component.state.work) {
    const {
      nameOfInstitution,
      degree,
      startDate,
      endDate,
      description
    } = component.state.work;

    const copyOfWorkList = [...component.state.workList];

    copyOfWorkList.push(component.state.work);

    if (
      !nameOfInstitution ||
      !degree ||
      !startDate ||
      !endDate ||
      !description === "Describe your job post"
    ) {
      return alert("Please fill out all input fields");
    }

    component.setState({
      isDisabled: !component.state.isDisabled,
      work: {
        nameOfInstitution: "",
        degree: "",
        startDate: "",
        endDate: "",
        description: "Describe your current job"
      },
      workList: copyOfWorkList
    });
  }
};

export { disableButton, onChangeWorkEducationHandler, onFormSubmission };
