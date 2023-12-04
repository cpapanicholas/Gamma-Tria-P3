import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    getUser(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getAllPostsOfUser($_id: ID!) {
    getAllPostsOfUser(_id: $_id) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($_id: ID!) {
    getSinglePost(_id: $_id) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
    }
  }
`;
export const QUERY_ALL_PROGRAMS = gql`
  query getAllPrograms {
    getAllPrograms {
      _id
      name
      workouts {
        _id
        name
        exercises {
          name
          sets
          reps
        }
      }
    }
  }
`;

export const QUERY_WORKOUTS = gql`
  query getAllWorkouts {
    getAllWorkouts {
      _id
      name
      exercises {
        name
        sets
        reps
      }
    }
  }
`;


// Add more queries as needed
