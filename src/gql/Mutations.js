import gql from 'graphql-tag';
export const ADD_QUESTION = gql`
  mutation addQuestion($input: CreateQuestionInput) {
    addQuestion(input: $input) {
      question
    }
  }
`;
