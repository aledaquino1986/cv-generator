import React, { Component } from "react";
import Input from "../elements/input/Input";
import Button from "../elements/button/Button";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: {
        jobTitle: "",
        isJobTitleInput: false
      },
      isHidden: false,
      heading: "CV Generator",
      jobTitleHeading: "Your job title",
      name: {
        username: "",
        isTextInput: false
      }
    };

    this.handleNameChangeToInput = this.handleNameChangeToInput.bind(this);
    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
  }

  handleNameChangeToInput(e) {
    e.preventDefault();
    console.log("ola bb");

    this.setState({
      name: {
        username: this.state.name.username,
        isTextInput: !this.state.name.isTextInput
      }
    });
  }

  handleJobTitleChangeToInput = e => {
    e.preventDefault();

    this.setState({
      title: {
        jobTitle: this.state.title.jobTitle,
        isJobTitleInput: !this.state.title.isJobTitleInput
      }
    });
  };

  onNameChangeHandler(e) {
    const { value } = e.target;
    console.log(this.state.name.username);

    this.setState({
      name: {
        username: e.target.value,
        isTextInput: true
      }
    });
  }

  onJobTitleChangeHandler = e => {
    const { value } = e.target;
    console.log(this.state.title.jobTitle);

    this.setState({
      title: {
        jobTitle: value,
        isJobTitleInput: true
      }
    });
  };

  render() {
    return (
      <header>
        <form action="">
          <div className="container name-container">
            {this.state.name.isTextInput ? (
              <>
                <Input
                  type="text"
                  placeholder="Add yourname"
                  onChange={this.onNameChangeHandler}
                  value={this.state.name.username}
                  className="mountedStyle"
                />
                <Button
                  className={
                    this.state.isHidden
                      ? "hidden unmountedStyle "
                      : "mountedStyle"
                  }
                  onClick={this.handleNameChangeToInput}
                  text="Confirm Your Name"
                />
              </>
            ) : (
              <>
                <h1>
                  {this.state.name.isTextInput === false &&
                  !this.state.name.username
                    ? this.state.heading
                    : this.state.name.username}
                </h1>

                <Button
                  className={
                    this.state.isHidden
                      ? "hidden unmountedStyle "
                      : "mountedStyle"
                  }
                  onClick={this.handleNameChangeToInput}
                  text="Add your name"
                />
              </>
            )}
          </div>
        </form>

        <form action="">
          <div className="container job-title-container">
            {this.state.title.isJobTitleInput ? (
              <>
                <Input
                  type="text"
                  placeholder="Add your job title"
                  onChange={this.onJobTitleChangeHandler}
                  value={this.state.title.jobTitle}
                  className="mountedStyle"
                />

                <Button
                  className={
                    this.state.isHidden
                      ? "hidden unmountedstyle"
                      : "mountedStyle"
                  }
                  onClick={this.handleJobTitleChangeToInput}
                  text="Confirm your job title"
                />
              </>
            ) : (
              <>
                <h4>
                  {!this.state.title.jobTitle
                    ? this.state.jobTitleHeading
                    : this.state.title.jobTitle}
                </h4>

                <Button
                  className={
                    this.state.isHidden
                      ? "hidden unmountedstyle"
                      : "mountedStyle"
                  }
                  onClick={this.handleJobTitleChangeToInput}
                  text="Add your job title"
                />
              </>
            )}
          </div>
        </form>

        <Button
          onClick={() =>
            this.setState({
              isHidden: !this.state.isHidden
            })
          }
          text=" Hide Buttons"
        />
      </header>
    );
  }
}

export default Header;
