import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
  <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      CtrlExam
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">
          Home <span class="sr-only">(current)</span>
        </a>
        <Link className="nav-item nav-link" to="/ExamHome">
          Attempt Exam
        </Link>
        <Link className="nav-item nav-link" to="/QuestionList">
          Add Question
        </Link>
      </div>
    </div>
  </nav>
);
export default Header;
