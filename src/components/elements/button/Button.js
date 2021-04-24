import React from "react";
import { HideButtonContext } from "../../../context/HideButtonContext";
import "./button.css";

const Button = ({
  className = "null",
  onClick = null,
  text,
  type = "button",
  isDisabled = false
}) => {
  return (
    <HideButtonContext.Consumer>
      {context => {
        const { isHidden } = context;
        return (
          <button
            className={
              text === "Hide Buttons" ||
              `${className} ${
                isHidden ? "hidden unmountedStyle " : "mountedStyle"
              }`
            }
            onClick={onClick}
            type="type"
            disabled={isDisabled}
          >
            {text}
          </button>
        );
      }}
    </HideButtonContext.Consumer>
  );
};

export default Button;
