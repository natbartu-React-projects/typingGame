import React, { useState, useEffect } from "react";
import Words from "./components/words/Words";
import Container from "./components/container/Container";
import TypeRacer from "./components/typeRacer/TypeRacer";
import Results from "./components/results/Results";
import "./App.css";

const App = () => {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [incorrectResults, setIncorrectResults] = useState([]);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * word.length);

  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResults((prevCorrect) => [...prevCorrect, newWord]);
      setCount((prevCorrect) => prevCorrect + 1);
      return;
    }
    setIncorrectResults((prevIncorrect) => [...prevIncorrect, inputValue]);
  };

  const handleInput = (e) => {
    if (e.charCode === 13 && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(word[randomWord]);
      setInputValue("");
    }
  };

  const handleStart = () => {
    setDisabled(!disabled);
    setCorrectResults([]);
    setIncorrectResults([]);
    setCount(0);
    setInputValue("");
  };

  return (
    <div className="App">
      <Container>
        <TypeRacer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disable={disabled}
          time={time}
          animation={animation}
          handleInput={handleInput}
          handleStart={handleStart}
        />
      </Container>
      <Results
        correctResults={correctResults}
        incorrectResults={incorrectResults}
        count={count}
      />
    </div>
  );
};

export default App;
