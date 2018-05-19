import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './login.css';
class UserLogin extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div class="wrapper">
            <form name="Login_Form" class="form-signin">
              <h3 class="form-signin-heading">
                Welcome Student! Please Sign In
              </h3>
              <hr class="colorgraph" />
              <br />
              <input
                type="text"
                class="form-control"
                name="Username"
                placeholder="Username"
                required=""
                autofocus=""
              />
              <input
                type="password"
                class="form-control"
                name="Password"
                placeholder="Password"
                required=""
              />

              <button
                class="btn btn-lg btn-primary btn-block"
                name="Submit"
                value="Login"
                onClick={() => this.nextPath('/ExamList')}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(UserLogin);
