// Example usage in a React component
import { useQuery } from '@apollo/client';
import { QUERY_SEARCH } from '../../utils/queries';

export default function SearchPage  ({ searchTerm }) {
//   const { loading, error, data } = useQuery(QUERY_SEARCH, {
//     variables: { searchTerm },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const searchResults = data.search;

  // Render the search results in your component
    const searchResults = [1, 2, 3 ]
  return (
    <div>
        ASDOGNASDGSIDG
      {searchResults.map((result) => (
        <div key={result._id}>
          {/* Display relevant information about each search result */}
          {result.name}
        </div>
      ))}
    </div>
  );
};

