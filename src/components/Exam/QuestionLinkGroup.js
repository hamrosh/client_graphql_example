import React, { Component } from 'react';
import QuestionLink from './QuestionLink';
class QuestionLinkGroup extends Component {
  render() {
    let arr = this.props.questionarray;
    let elements = [];

    arr.map((arr, index) => {
      elements.push(
        <QuestionLink
          key={index + 1}
          questionnumber={index + 1}
          status={arr.status}
          setQuestion={this.props.setQuestion}
        />
      );
    });
    return <div>{elements}</div>;
  }
}
export default QuestionLinkGroup;
