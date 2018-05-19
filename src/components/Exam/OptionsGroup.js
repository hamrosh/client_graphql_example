import React, { Component } from 'react';
import SingleOption from './SingleOption';
class OptionsGroup extends Component {
  render() {
    let arr = this.props.optionarray;
    let elements = [];
    var text;
    for (let i = 0; i < arr.length; i++) {
      elements.push(
        <li className="list-group-item custom1">
          <SingleOption
            key={`${i + 1}_rad`}
            myid={`${i + 1}_rad`}
            singleoption={arr[i]}
            selectedAnswer={this.props.selectedAnswer}
            onRadioChange={this.props.onRadioChange}
          />
        </li>
      );
    }
    console.log(elements);
    return <ul class="list-group">{elements}</ul>;
  }
}
export default OptionsGroup;
