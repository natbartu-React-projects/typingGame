import React, { useState, useEffect } from "react";
import Words from "./components/words/Words";
import Container from "./components/container/Container";
import TypeRacer from "./components/typeRacer/TypeRacer";
import "./App.css";

const App = () => {
  const [word, setWord] = useState(Words);
  const [newWord, setNweWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [currentResults, setCurrentResults] = useState([]);
  const [incorrectResults, setIncorrectResults] = useState([]);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * word.length);

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
        />
      </Container>
    </div>
  );
};

export default App;
