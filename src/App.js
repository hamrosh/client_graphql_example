import React, { Component } from 'react';
//import the header Componnenr
import HomeHeader from './components/HomePage/HomeHeader';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Clients from './components/Clients/Clients';
import UserLogin from './components/Login/UserLogin';
import ClientLogin from './components/Login/ClientLogin';
import ExamHome from './components/Exam/ExamHome';
import ExamList from './components/StudentSection/ExamList';
// import for the routing in react

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import for graphql client
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

// connect to the graphql Client
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <HomeHeader />
            <div className="container">
              <Route exact strict path="/" component={HomePage} />
              <Route exact strict path="/About" component={About} />
              <Route exact strict path="/Login" component={UserLogin} />
              <Route exact strict path="/ClientLogin" component={ClientLogin} />
              <Route exact strict path="/ExamHome" component={ExamHome} />
              <Route exact strict path="/ExamList" component={ExamList} />
            </div>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;

// example for simple client direct query

// client
//   .query({
//     query: gql`
//       {
//         allQuestions {
//           question
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));
