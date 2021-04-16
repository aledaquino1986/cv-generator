import React from "react";
import "./layout.css";

const MainContainer = ({ children }) => {
  return (
    <main
      className="main-section
        "
    >
      {children}
    </main>
  );
};

export default MainContainer;
