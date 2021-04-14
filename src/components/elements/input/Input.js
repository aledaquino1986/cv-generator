import React from "react";
import "./input.css";

const Input = ({
  type,
  placeholder = "",
  onChange,
  value,
  className = "mountedStyle",
  id = ""
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={className}
      id={id}
    />
  );
};

export default Input;
