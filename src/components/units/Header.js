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
  }

  changeTextToInput = (e, state) => {
    e.preventDefault();

    if (state === this.state.title) {
      this.setState({
        title: {
          jobTitle: this.state.title.jobTitle,
          isJobTitleInput: !this.state.title.isJobTitleInput
        }
      });
    } else if (state === this.state.name) {
      this.setState({
        name: {
          username: this.state.name.username,
          isTextInput: !this.state.name.isTextInput
        }
      });
    }
  };

  createNameAndJobTitle = (e, state) => {
    const { value } = e.target;
    if (state === this.state.title) {
      this.setState({
        title: {
          jobTitle: value,
          isJobTitleInput: true
        }
      });
    } else if (state === this.state.name) {
      this.setState({
        name: {
          username: value,
          isTextInput: true
        }
      });
    }
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
                  onChange={e => this.createNameAndJobTitle(e, this.state.name)}
                  value={this.state.name.username}
                  className="mountedStyle"
                />
                <Button
                  className={
                    this.state.isHidden
                      ? "hidden unmountedStyle "
                      : "mountedStyle"
                  }
                  onClick={e => this.changeTextToInput(e, this.state.name)}
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
                  onClick={e => this.changeTextToInput(e, this.state.name)}
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
                  onChange={e =>
                    this.createNameAndJobTitle(e, this.state.title)
                  }
                  value={this.state.title.jobTitle}
                  className="mountedStyle"
                />

                <Button
                  className={
                    this.state.isHidden
                      ? "hidden unmountedstyle"
                      : "mountedStyle"
                  }
                  onClick={e => this.changeTextToInput(e, this.state.title)}
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
                  onClick={e => this.changeTextToInput(e, this.state.title)}
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
