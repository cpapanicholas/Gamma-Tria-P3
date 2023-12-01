import React, { useState } from 'react';

const ConversationList = ({ conversations, onSelectConversation }) => {
  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li key={index} onClick={() => onSelectConversation(index)}>
            {conversation.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChatRoom = ({ currentConversation }) => {
  return (
    <div>
      <h2>Chat Room</h2>
      {currentConversation && <MessageList messages={currentConversation.messages} />}
    </div>
  );
};

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
};

const DMApp = () => {
  const [currentConversation, setCurrentConversation] = useState(null);

  const conversations = [
    { name: 'User 1', messages: ['Hello!', 'How are you?'] },
    { name: 'User 2', messages: ['Hi there!', 'I am good.'] },
    // Add more conversations as needed
  ];

  const handleSelectConversation = (index) => {
    setCurrentConversation(conversations[index]);
  };

  return (
    <div>
      <ConversationList conversations={conversations} onSelectConversation={handleSelectConversation} />
      <ChatRoom currentConversation={currentConversation} />
    </div>
  );
};

export default DMApp;
