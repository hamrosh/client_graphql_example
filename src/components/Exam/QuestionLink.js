import React, { Component } from 'react';
class QuestionLink extends Component {
  constructor(props) {
    super(props);
    this.setQuestion = this.setQuestion.bind(this);
  }
  setQuestion() {
    this.props.setQuestion(this.props.questionnumber - 1);
  }
  render() {
    var color = 'box ' + this.props.status;
    return (
      <button className={color} onClick={this.setQuestion}>
        {this.props.questionnumber}
      </button>
    );
  }
}
export default QuestionLink;
