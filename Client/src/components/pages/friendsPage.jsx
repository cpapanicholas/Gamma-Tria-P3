// src/FriendsList.jsx
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER} from '../../../utils/queries';  // Import other queries as needed
import { ADD_FRIEND } from '../../../utils/mutations';  // Import mutations as needed
import { UPDATE_WORKOUT, CREATE_WORKOUT } from '../../../utils/mutations';  // Import additional mutations

const FriendsList = () => {
  const [newFriendId, setNewFriendId] = useState('');
  const { loading, error, data } = useQuery(QUERY_USER);
  
  // UseMutation hook for adding a friend
  const [addFriendMutation] = useMutation(ADD_FRIEND);

  // UseMutation hooks for additional mutations
  const [updateWorkoutMutation] = useMutation(UPDATE_WORKOUT);
  const [createWorkoutMutation] = useMutation(CREATE_WORKOUT);

  useEffect(() => {
    // Assuming your GraphQL server has a "me" query to get the current user
    // You can replace "GET_USER" with the appropriate query
    if (!loading && data) {
      console.log('Current user:', data.me);
    }
  }, [loading, data]);

  const handleAddFriend = async () => {
    if (newFriendId.trim() !== '') {
      try {
        // Use the addFriend mutation to add a friend
        const { data: { addFriend } } = await addFriendMutation({
          variables: { friendId: newFriendId },
        });

        // Optionally, you can update the state or perform other actions
        console.log('Friend added:', addFriend);

        setNewFriendId('');
      } catch (error) {
        console.error('Error adding friend:', error.message);
      }
    }
  };

  // Example of using the updateWorkout mutation
  const handleUpdateWorkout = async (workoutId, updatedWorkout) => {
    try {
      const { data: { updateWorkout } } = await updateWorkoutMutation({
        variables: { workoutId, updatedWorkout },
      });

      console.log('Workout updated:', updateWorkout);
    } catch (error) {
      console.error('Error updating workout:', error.message);
    }
  };

  // Example of using the createWorkout mutation
  const handleCreateWorkout = async (workoutInput) => {
    try {
      const { data: { createWorkout } } = await createWorkoutMutation({
        variables: { workoutInput },
      });

      console.log('Workout created:', createWorkout);
    } catch (error) {
      console.error('Error creating workout:', error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { me } = data;

  return (
    <div>
      <h1>Friends List</h1>

      <ul>
        {me.friends.map((friend) => (
          <li key={friend._id}>{friend.username}</li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          placeholder="Enter friend's ID"
          value={newFriendId}
          onChange={(e) => setNewFriendId(e.target.value)}
        />
        <button onClick={handleAddFriend}>Add Friend</button>
      </div>

      {/* Example usage of updateWorkout and createWorkout mutations */}
      <button onClick={() => handleUpdateWorkout('yourWorkoutId', { /* updated workout data */ })}>
        Update Workout
      </button>

      <button onClick={() => handleCreateWorkout({ /* workoutInput data */ })}>
        Create Workout
      </button>
    </div>
  );
};

export default FriendsList;
