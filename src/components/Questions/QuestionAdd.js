import React from 'react';

// import for the mutation connection of react and graphql
import { Mutation } from 'react-apollo';
import Yup from 'yup';
// import custom defined mutations
import { ADD_QUESTION } from '../../gql/Queries';
import { GET_QUESTION_LIST } from '../../gql/Queries';
// import for the form handling api formik which helps us in creating forms in react in a simple way
import { Formik, Form, Field } from 'formik';

const QuestionAdd = () => {
  return (
    <div>
      {/* Declare Mutation Tag , pass the mutation as function and the mutation result */}
      <Mutation
        mutation={ADD_QUESTION}
        refetchQueries={[{ query: GET_QUESTION_LIST }]}
      >
        {(addQuestion, { data, loading, error }) => (
          <div>
            <Formik
              onSubmit={(values, actions) => {
                console.log(values);
                addQuestion({
                  variables: {
                    input: {
                      question: values.question,
                      opt1: values.opt1,
                      opt2: values.opt2,
                      opt3: values.opt3,
                      opt4: values.opt4,
                      rightopt: 'rtr'
                    }
                  }
                });
                setSubmitting(false);
              }}
              initialValues={{
                question: 'Write a Question here'
              }}
              render={({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label for="question">Question</label>
                    <Field type="text" name="question" placeholder="Question" />
                    <small id="emailHelp" className="form-text text-muted">
                      Write you Question here
                    </small>
                    {touched.question &&
                      errors.question && <div>{errors.question}</div>}
                  </div>
                  <div className="form-group">
                    <label for="opt1">Option 1</label>
                    <Field type="email" name="opt1" placeholder="Option 1" />
                  </div>

                  <div className="form-group">
                    <label for="opt2">Option 2</label>
                    <Field type="text" name="opt2" placeholder="Option 2" />
                  </div>

                  <div className="form-group">
                    <label for="opt3">Option 3</label>
                    <Field type="text" name="opt3" placeholder="Option 3" />
                  </div>

                  <div className="form-group">
                    <label for="opt4">Option 4</label>
                    <Field type="text" name="opt4" placeholder="Option 4" />
                  </div>

                  <button type="submit">Submit</button>
                </Form>
              )}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}
          </div>
        )}
      </Mutation>
    </div>
  );
};
export default QuestionAdd;
