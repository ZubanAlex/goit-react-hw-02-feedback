import React from "react";
import T from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <h4>Total: {total}</h4>

      {!isNaN(positivePercentage) && (
        <h4>Positive Feedback: {positivePercentage}%</h4>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: T.number.isRequired,
  neutral: T.number.isRequired,
  bad: T.number.isRequired,
  total: T.number.isRequired,
  positivePercentage: T.func.isRequired
};

export default Statistics;
