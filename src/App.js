import React, { useState, useEffect } from "react";
import Words from "./components/words/words";
import "./App.css";

const App = () => {
  const [word, setWord] = useState(Words);
  const [newWord, setNweWord] = useState(word[0]);

  return <div className="App"></div>;
};

export default App;
