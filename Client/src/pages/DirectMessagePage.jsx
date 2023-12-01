// DirectMessagePage.jsx

import React, { useState } from 'react';

const DirectMessagePage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Direct Message Page</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '200px' }}>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <textarea
          rows="4"
          cols="50"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <br />
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default DirectMessagePage;
