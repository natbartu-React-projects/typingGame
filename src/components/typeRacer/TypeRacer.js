import React from "react";
import Button from "../button/Button";
import "./typeRacer.css";

const TypeRacer = () => {
  return (
    <div className="typeRacer">
      <div className="wordOutput"></div>
      <p>New Word</p>

      <div className="time">
        <p>time</p>
      </div>

      <div className="wordValues">
        <input type="text" />
        <Button />
      </div>
    </div>
  );
};

export default TypeRacer;
