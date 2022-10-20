import React from "react";
import Button from "../button/Button";
import "./typeRacer.css";

const TypeRacer = (props) => {
  const { newWord, inputValue, setInputValue, disabled, time, animation } =
    props;

  return (
    <div className="typeRacer">
      <div className="wordOutput"></div>
      <p>{newWord}</p>

      <div
        style={{ animation: animation !== null ? animation : "" }}
        className="time"
      >
        <p>{time}</p>
      </div>

      <div className="wordValues">
        <input
          type="text"
          disabled={disabled && disabled}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={disabled ? "" : "Start typing..."}
        />
        <Button />
      </div>
    </div>
  );
};

export default TypeRacer;
