
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CONVERSATION } from './your-mutation-file'; // Update with your actual mutation file

const MessagesPage = () => {
  const [createConversation] = useMutation(CREATE_CONVERSATION);
  const [friendId, setFriendId] = useState('');

  const handleCreateConversation = async () => {
    try {
      const { data } = await createConversation({
        variables: { friendId },
      });

      console.log('Conversation created:', data.createConversation);
      // Add logic to handle the created conversation as needed
    } catch (error) {
      console.error('Error creating conversation:', error.message);
      // Handle the error
    }
  };

  return (
    <div>
      {/* ... your existing content ... */}
      <div>
        <h2>Create Conversation</h2>
        <input
          type="text"
          placeholder="Friend ID"
          value={friendId}
          onChange={(e) => setFriendId(e.target.value)}
        />
        <button onClick={handleCreateConversation}>Create Conversation</button>
      </div>
    </div>
  );
};

export default MessagesPage;
