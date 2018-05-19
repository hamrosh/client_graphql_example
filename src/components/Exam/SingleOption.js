import React, { Component } from 'react';
class SingleOption extends Component {
  constructor(props) {
    super(props);
    this.onRadioChange = this.onRadioChange.bind(this);
  }
  onRadioChange(value) {
    this.props.onRadioChange(value);
  }
  render() {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="chooseoptions"
          id={this.props.myid}
          checked={this.props.selectedAnswer === this.props.singleoption}
          value={this.props.singleoption}
          onChange={e => this.props.onRadioChange(e.target.value)}
        />
        <label className="form-check-label" htmlFor={this.props.myid}>
          {this.props.singleoption}
        </label>
      </div>
    );
  }
}
export default SingleOption;
