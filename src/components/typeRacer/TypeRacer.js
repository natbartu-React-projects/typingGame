import React from "react";
import Button from "../button/Button";
import "./typeRacer.css";

const TypeRacer = (props) => {
  const {
    newWord,
    inputValue,
    setInputValue,
    disabled,
    time,
    animation,
    handleinput,
    handleStart,
  } = props;

  return (
    <div className="typeRacer">
      <div className="wordOutput"></div>
      <p>{newWord}</p>

      <div className="time">
        <p style={{ animation: animation !== null ? animation : "" }}>{time}</p>
      </div>

      <div className="wordValues">
        <input
          type="text"
          disabled={disabled && disabled}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={disabled ? "" : "Start Typing..."}
          onKeyPress={(e) => handleinput(e)}
        />
        <Button handleStart={handleStart} disabled={disabled} />
      </div>
    </div>
  );
};

export default TypeRacer;
