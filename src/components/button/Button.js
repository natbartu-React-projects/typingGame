import React from "react";
import "./button.css";

const Button = ({ handleStart, disabled }) => {
  return (
    <button onClick={handleStart}>{disabled ? "Start" : "Restart"}</button>
  );
};

export default Button;
