import React, { Component } from "react";

import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

import styles from "./App.module.css";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Number(total);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalPositiveFeedbackPercentage = Math.round(
      (good / this.countTotalFeedback()) * 100
    );

    return Number(totalPositiveFeedbackPercentage);
  };

  addReview = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.container}>
        <Section title={"Pleace leave feedback"}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addReview}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
