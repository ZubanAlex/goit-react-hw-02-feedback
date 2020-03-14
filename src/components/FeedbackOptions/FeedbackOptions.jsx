import React from "react";
import T from "prop-types";

import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(Object.keys(options));
  return (
    <div>
      {Object.keys(options).map(option => {
        return (
          <button
            className={styles.button}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: T.object.isRequired,
  onLeaveFeedback: T.func.isRequired
};

export default FeedbackOptions;
