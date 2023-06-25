import { FeedbackOptions } from 'components/feedbackOptions/feedbackOptions';
import { Statistics } from 'components/statistics/statistics';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positiveFeedback: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    this.setState({ total });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const positiveFeedback = total === 0 ? 0 : Math.round((good / total) * 100);
    this.setState({ positiveFeedback });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();

    return (
      <div className="feedback">
        <h2 className="title">Please leave your feedback</h2>

        <FeedbackOptions
          options={[good, neutral, bad]}
          onLeaveFeedback={this.handleFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positiveFeedback={countPositiveFeedbackPercentage}
        />
        
      </div>
    );
  }
}
