import React, { createContext, Component } from "react";

export const HideButtonContext = createContext();

class HideButtonContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false
    };
  }

  hideButtonHandler = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    return (
      <HideButtonContext.Provider
        value={{ ...this.state, hideButtonHandler: this.hideButtonHandler }}
      >
        {this.props.children}
      </HideButtonContext.Provider>
    );
  }
}

export default HideButtonContextProvider;
