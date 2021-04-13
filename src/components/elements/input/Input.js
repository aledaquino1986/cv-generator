import React from "react";
import "./input.css";

const Input = ({ type, placeholder, onChange, value, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={className}
    />
  );
};

export default Input;
