import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ADD_FRIEND } from './queries'; // Import your GraphQL queries/mutations

// Create an HTTP link
const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql', // Replace with your GraphQL server endpoint
});

// Set up Apollo Client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Example mutation call
const updateUserMutation = async () => {
  const id = ''; // Replace with the actual user ID
  const input = { /* your input data */ };

  try {
    const result = await client.mutate({
      mutation: ADD_FRIEND,
      variables: { id, input },
    });

    // Handle the result as needed
    console.log('Mutation result:', result);
  } catch (error) {
    // Handle errors
    console.error('Mutation error:', error);
  }
};

// Call the mutation
updateUserMutation();
