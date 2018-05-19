import React, { Component } from 'react';
import QuestionObj from '../data/questions';
import QuestionLinkGroup from './QuestionLinkGroup';
import OptionsGroup from './OptionsGroup';
class MainExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: QuestionObj,
      currentQuestion: 0,
      numberofquestions: QuestionObj.length
    };
    this.SetCurrentQuestion = this.SetCurrentQuestion.bind(this);
    this.setAsMarkedAndNext = this.setAsMarkedAndNext.bind(this);
    this.clearResponse = this.clearResponse.bind(this);
    this.saveAndNext = this.saveAndNext.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onRadioChange2 = this.onRadioChange2.bind(this);
  }

  SetCurrentQuestion(cq) {
    let s = Object.assign({}, this.state);
    if (s.questions[cq].status === 'UNREAD') s.questions[cq].status = 'READ';
    s.currentQuestion = cq;
    this.setState(s);
  }
  setAsMarkedAndNext() {
    console.log('Hello');
    let s = Object.assign({}, this.state);
    console.log(s.currentQuestion);
    if (s.currentQuestion < s.numberofquestions) {
      if (s.questions[s.currentQuestion].answerSelected)
        s.questions[s.currentQuestion].status = 'MARKED_AND_ANSWERED';
      else s.questions[s.currentQuestion].status = 'MARKED';
      s.currentQuestion = s.currentQuestion + 1;
      if (s.currentQuestion === s.numberofquestions) {
        s.currentQuestion = s.currentQuestion - 1;
      }
      if (s.questions[s.currentQuestion].status === 'UNREAD')
        s.questions[s.currentQuestion].status = 'READ';
      this.setState(s);
    }
  }

  clearResponse() {
    let s = Object.assign({}, this.state);
    s.questions[s.currentQuestion].status = 'READ';
    s.questions[s.currentQuestion].selectedans = '';
    s.questions[s.currentQuestion].answerSelected = false;
    this.setState(s);
  }
  saveAndNext() {
    var status;
    let s = Object.assign({}, this.state);

    if (s.currentQuestion < s.numberofquestions) {
      if (s.questions[s.currentQuestion].answerSelected) status = 'ANSWERED';
      else status = 'READ';
      s.questions[s.currentQuestion].status = status;
      s.currentQuestion = s.currentQuestion + 1;
      if (s.currentQuestion === s.numberofquestions) {
        s.currentQuestion = s.currentQuestion - 1;
      }
      if (s.questions[s.currentQuestion].status === 'UNREAD')
        s.questions[s.currentQuestion].status = 'READ';

      this.setState(s);
    }
  }

  onRadioChange(value) {
    console.log('selected answer : ', value);
    let s = Object.assign({}, this.state);
    s.questions[s.currentQuestion].selectedans = value;
    s.questions[s.currentQuestion].answerSelected = true;
    console.log(s.questions[s.currentQuestion].selectedans);
    this.setState(s);
  }
  onRadioChange2(value) {}

  render() {
    let currentquestion = this.state.currentQuestion;
    let questions = this.state.questions;
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <ul class="list-group">
                <li class="list-group-item disabled">
                  <h4>Question No : {currentquestion + 1}</h4>
                </li>
                <li class="list-group-item disabled">
                  <h6>{questions[currentquestion].question}</h6>
                </li>
                <li class="list-group-item">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="chooseoptions"
                      id="option1"
                      checked={
                        questions[currentquestion].selectedans ===
                        questions[currentquestion].opt1
                      }
                      value={questions[currentquestion].opt1}
                      onChange={e => this.onRadioChange(e.target.value)}
                    />
                    <label class="form-check-label" for="option1">
                      {questions[currentquestion].opt1}
                    </label>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="chooseoptions"
                      id="option2"
                      checked={
                        questions[currentquestion].selectedans ===
                        questions[currentquestion].opt2
                      }
                      value={questions[currentquestion].opt2}
                      onChange={e => this.onRadioChange(e.target.value)}
                    />
                    <label class="form-check-label" for="option2">
                      {questions[currentquestion].opt2}
                    </label>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="chooseoptions"
                      id="option3"
                      checked={
                        questions[currentquestion].selectedans ===
                        questions[currentquestion].opt3
                      }
                      value={questions[currentquestion].opt3}
                      onChange={e => this.onRadioChange(e.target.value)}
                    />
                    <label class="form-check-label" for="option3">
                      {questions[currentquestion].opt3}
                    </label>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="chooseoptions"
                      id="option4"
                      checked={
                        questions[currentquestion].selectedans ===
                        questions[currentquestion].opt4
                      }
                      value={questions[currentquestion].opt4}
                      onChange={e => this.onRadioChange(e.target.value)}
                    />
                    <label class="form-check-label" for="option4">
                      {questions[currentquestion].opt4}
                    </label>
                  </div>
                </li>
              </ul>
              <br />
              <div>
                <div class="row">
                  <div class="col-md-8">
                    <div class="btn-group mr-2">
                      <button
                        className="btn btn-outline-primary"
                        onClick={this.setAsMarkedAndNext}
                      >
                        MARK AND NEXT
                      </button>
                    </div>
                    <div class="btn-group mr-2">
                      <button
                        className="btn btn-outline-primary"
                        onClick={this.clearResponse}
                      >
                        CLEAR RESPONSE
                      </button>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <button
                      className="btn btn-primary float-right"
                      onClick={this.saveAndNext}
                    >
                      SAVE AND NEXT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <QuestionLinkGroup
                questionarray={this.state.questions}
                setQuestion={this.SetCurrentQuestion}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* the for loop above is essentially the same as
    elements = arr.map( item => <Card value={ item } /> );
    The result is an array of four Card components. */

export default MainExam;
