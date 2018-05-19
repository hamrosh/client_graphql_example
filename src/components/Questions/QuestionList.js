import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// import custom defined mutations
import { GET_QUESTION_LIST } from '../../gql/Queries';

class QuestionList extends Component {
  render() {
    return (
      <div>
        {/* Use the Query component from react - apollo making the connection of react and graphql connection client  */}

        <Query query={GET_QUESTION_LIST}>
          {({ loading, error, data }) => {
            // if loading is true , return the content to be shown while loading
            if (loading) return <p>Loading Question...</p>;
            // if any error handle in the below if condition and return
            if (error) return <p>Error :(</p>;
            // if the data is successfully retrieved then write code here
            var x = data.allQuestions.map(({ id, question }) => (
              <div key={id} className="list-group-item">
                {question}
              </div>
            ));
            return (
              <div>
                <h1> List of Questions</h1>
                <ul>{x}</ul>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default QuestionList;
