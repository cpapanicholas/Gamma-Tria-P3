import React, { useState } from 'react';

export default function Friends(){
    <div id="chat-container">
    <ConversationSearch conversations={conversations} />
    <ConversationList
        onConversationItemSelected={conversationChanged}
        conversations={conversations}
        selectedConversation={selectedConversation} />
    <NewConversation />
    <ChatTitle 
        selectedConversation={selectedConversation}
        onDeleteConversation={onDeleteConversation} />
    {conversationContent}
    <ChatForm 
        selectedConversation={selectedConversation}
        onMessageSubmitted={onMessageSubmitted} />
</div>
   
    
};