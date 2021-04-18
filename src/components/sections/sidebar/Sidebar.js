import React, { Component } from "react";
import Input from "../../elements/input/Input";
import Button from "../../elements/button/Button";
import "./sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: {
        phone: "",
        email: "",
        address: "",
        linkedin: ""
      },
      isAddedToPage: false
    };
  }

  onChangeHandler = (e, inputName) => {
    const { value } = e.target;

    if (inputName === "phone") {
      this.setState({
        personalDetails: {
          ...this.state.personalDetails,
          phone: value
        }
      });
    } else if (inputName === "email") {
      this.setState({
        personalDetails: {
          ...this.state.personalDetails,
          email: value
        }
      });
    } else if (inputName === "address") {
      this.setState({
        personalDetails: {
          ...this.state.personalDetails,
          address: value
        }
      });
    } else if (inputName === "linkedin") {
      this.setState({
        personalDetails: {
          ...this.state.personalDetails,
          linkedin: value
        }
      });
    }
  };
  render() {
    const { phone, email, address, linkedin } = this.state.personalDetails;
    return (
      <aside className="sidebar">
        <div className="section-heading">
          <h3>Personal Details</h3>
        </div>

        {this.state.isAddedToPage ? (
          <div className="personal-details-info">
            <p>
              {" "}
              <span>Phone: </span> {phone}
            </p>
            <p>
              <span>Email: </span>
              {email}
            </p>
            <p>
              {" "}
              <span>Address: </span>
              {address}
            </p>
            <p>
              <span>Linkedin: </span>
              {linkedin}
            </p>
            <Button
              text="Edit"
              onClick={() =>
                this.setState({ isAddedToPage: !this.state.isAddedToPage })
              }
            />
          </div>
        ) : (
          <>
            <div className="personal-details">
              <form className="personal-details-form">
                <label htmlFor="phone">Phone</label>
                <Input
                  type="text"
                  onChange={e => this.onChangeHandler(e, "phone")}
                  placeholder={phone ? phone : "Phone"}
                  value={phone && phone}
                  id="phone"
                />
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  onChange={e => this.onChangeHandler(e, "email")}
                  placeholder={email ? email : "Email"}
                  value={email && email}
                  id="email"
                />
                <label htmlFor="Address">Address</label>
                <Input
                  type="text"
                  onChange={e => this.onChangeHandler(e, "address")}
                  placeholder={address ? address : "Address"}
                  value={address && address}
                  id="address"
                />
                <label htmlFor="linkedin">Linkedin</label>
                <Input
                  type="text"
                  onChange={e => this.onChangeHandler(e, "linkedin")}
                  placeholder={linkedin ? linkedin : "Linkedin"}
                  value={linkedin && linkedin}
                  id="linkedin"
                />

                <Button
                  text=" Add Personal details"
                  onClick={() =>
                    this.setState({ isAddedToPage: !this.state.isAddedToPage })
                  }
                />
              </form>
            </div>
          </>
        )}
      </aside>
    );
  }
}

export default Sidebar;
