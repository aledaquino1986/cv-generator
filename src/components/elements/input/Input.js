import React from "react";
import "./input.css";
import { disablePlaceholder, enablePlaceholder } from "../../../utils/utils";

const Input = ({
  type,
  placeholder = "",
  onChange,
  value,
  className = "mountedStyle",
  id = ""
}) => {
  return type === "textarea" ? (
    <textarea
      onChange={onChange}
      placeholder="Describe your job post"
      onFocus={disablePlaceholder}
      onBlur={e => enablePlaceholder(e, "Describe your job post")}
    />
  ) : (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        id={id}
        onFocus={disablePlaceholder}
        onBlur={e => enablePlaceholder(e, placeholder)}
      />
    </>
  );
};

export default Input;
