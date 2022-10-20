import React from "react";
import "./results.css";

const Results = (props) => {
  const { correctResults, incorrectResults, count } = props;

  return (
    <div className="results">
      <div className="title">
        <p>Correct Answers: {count}</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          {correctResults.map((correctWord, idx) => (
            <div key={idx} className="row">
              <p>{correctWord}</p>
            </div>
          ))}
          <p>{correctResults}</p>
        </div>
        <div className="incorrectResults">
          {incorrectResults.map((incorrectWord, idx) => (
            <div key={idx} className="row">
              <p>{incorrectWord}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
