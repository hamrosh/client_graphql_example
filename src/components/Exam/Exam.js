import React, { Component } from 'react';
import QuestionObj from '../../data/questions2';
import QuestionLinkGroup from './QuestionLinkGroup';
import OptionsGroup from './OptionsGroup';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import _ from 'lodash';

class Exam extends Component {
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
  }

  SetCurrentQuestion(cq) {
    let s = Object.assign({}, this.state);
    if (s.questions[cq].status === 'UNREAD') s.questions[cq].status = 'READ';
    this.abclearAns();

    this.setState({
      currentQuestion: cq
    });
  }

  setAsMarkedAndNext() {
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
  // modified by ab
  abclearAns() {
    let s = Object.assign({}, this.state);
    if (s.questions[s.currentQuestion].status == 'READ') {
      s.questions[s.currentQuestion].selectedans = '';
      s.questions[s.currentQuestion].answerSelected = false;
    }

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

  render() {
    let currentquestion = this.state.currentQuestion;
    let questions = this.state.questions;
    if (!this.props.examcompleted) {
      return (
        <div>
          <div class="container-fluid">
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
                    <OptionsGroup
                      selectedAnswer={questions[currentquestion].selectedans}
                      optionarray={questions[currentquestion].options}
                      onRadioChange={this.onRadioChange}
                    />
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <div class="row">
                  <div class="col-md-12">
                    <ul class="list-group">
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Answered
                        <button type="button" className="box2 ANSWERED">
                          <span class="badge badge-pill">
                            {
                              _.filter(this.state.questions, {
                                status: 'ANSWERED'
                              }).length
                            }
                          </span>
                        </button>
                      </li>

                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Not Answered
                        <button type="button" className="box2 READ">
                          <span class="badge badge-pill">
                            {
                              _.filter(this.state.questions, {
                                status: 'READ'
                              }).length
                            }
                          </span>
                        </button>
                      </li>

                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Not Visited
                        <button type="button" className="box2 UNREAD">
                          <span class="badge badge-pill">
                            {
                              _.filter(this.state.questions, {
                                status: 'UNREAD'
                              }).length
                            }
                          </span>
                        </button>
                      </li>

                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Marked for Review
                        <button type="button" className="box2 MARKED">
                          <span class="badge badge-pill">
                            {
                              _.filter(this.state.questions, {
                                status: 'MARKED'
                              }).length
                            }
                          </span>
                        </button>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Answered and Marked for Review (Will not be considered
                        for Evaluation)
                        <button
                          type="button"
                          className="box2 MARKED_AND_ANSWERED"
                        >
                          <span class="badge badge-pill">
                            {
                              _.filter(this.state.questions, {
                                status: 'MARKED_AND_ANSWERED'
                              }).length
                            }
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <QuestionLinkGroup
                      abclearAns={this.abclearAns}
                      abval=""
                      questionarray={this.state.questions}
                      setQuestion={this.SetCurrentQuestion}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-8">
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
              <div class="col-md-4 text-center">
                <button
                  className="btn  btn-primary float-center text-center"
                  onClick={this.saveAndNext}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Exam Completed</h3>
        </div>
      );
    }
  }
}

export default Exam;
