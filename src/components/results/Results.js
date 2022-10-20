import React from "react";

const Results = (props) => {
  const { correctResults, incorrectResults, count } = props;

  return (
    <div className="results">
      <div className="title">
        <p>Correct Answers: {count}</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          <p>{correctResults}</p>
        </div>
        <div className="incorrectResults">
          <p>{incorrectResults}</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
