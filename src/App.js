import React, { useState, useEffect } from "react";
import Words from "./components/words/Words";
import "./App.css";

const App = () => {
  const [word, setWord] = useState(Words);
  const [newWord, setNweWord] = useState(word[0]);
  const [disable, setDisable] = useState(true);
  const [currentResults, setCurrentResults] = useState([]);
  const [incorrectResults, setIncorrectResults] = useState([]);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  console.log(word.length);
  let randomWord = Math.floor(Math.random() * word.length);

  return <div className="App"></div>;
};

export default App;
