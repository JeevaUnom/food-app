// Chatbox.js
import React, { useState } from 'react';


const Chatbox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isChatOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      {isChatOpen && (
        <div className="chat-container">
          <div className="chat-header">Chat</div>
          <div className="chat-messages">
            {/* Render your chat messages here */}
          </div>
          <div className="chat-input">
            {/* Add your input form for sending messages */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
