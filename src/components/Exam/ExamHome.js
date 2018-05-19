import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import Header from './Header';
import Exam from './Exam';

const Completionist = () => <span>Your time is over</span>;

export default class ExamHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 6000000,
      completed: false
    };
  }

  timerfunc = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      this.setState({ completed: true });
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="TIMER">
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  render() {
    return (
      <div>
        <br />
        <Countdown
          date={Date.now() + this.state.duration}
          renderer={this.timerfunc}
        />
        <Exam examcompleted={this.state.completed} />
      </div>
    );
  }
}
