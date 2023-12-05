import { gql } from '@apollo/client';

// Add your GraphQL queries here
export const FETCH_EXERCISES = gql`
  query {
    exercises {
      name
      type
      muscle
      equipment
      difficulty
      instructions
    }
  }
`;
const API_KEY = 'IO1Gpk9XilH6IN1n7chKnA==XLJdLDmRTfKqjX63'
// Function to fetch exercises
export const fetchExercises = async (term) => {
  // Implement GraphQL query execution logic here
  try{

    const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${term}`, {
      headers: {
        'X-Api-Key': API_KEY
      }
    })
   
     if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
     }
     const data = await response.json();
     console.log(data);
     return data;
  } catch(error) {
    console.log(`Error fetching data:`, error.message);
  }
};