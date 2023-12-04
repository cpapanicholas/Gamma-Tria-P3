import React, { useState } from 'react';
// import io from 'socket.io-client'; // Make sure to import the Socket.IO client library

const MessagePage = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [username, setUsername] = useState('User'); // Set the initial username

  // Connect to the Socket.IO server
  const socket = io('http://localhost:3001'); // Update the URL to match your server

  useEffect(() => {
    // Set up event listeners for incoming messages and notifications
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on('notification', (data) => {
      setMessages((prevMessages) => [...prevMessages, { notification: data.notification }]);
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const sendMessage = (event) => {
    event.preventDefault();
    if (messageInput.trim()) {
      socket.emit('message', { sent: messageInput, username });
      setMessageInput('');
    }
  };

  return (
    <div>
      <h1>Direct Message Page</h1>
      
      <div>
        <h2>Chat Room</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              {msg.notification ? (
                <span>{msg.notification}</span>
              ) : (
                <span>
                  {msg.username}: {msg.sent}
                </span>
              )}
            </li>
          ))}
        </ul>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default MessagePage;