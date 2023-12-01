import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        username
        _id
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($input: UserInput) {
    addUser(input: $input) {
      token
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
