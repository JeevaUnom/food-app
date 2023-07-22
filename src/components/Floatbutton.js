import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chatbox from './Chatbox';


const FloatingButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    
    console.log('Button clicked!');
    navigate('/chat');
  };

  return (
   
    <button className="floating-button" onClick={handleClick}>
    Ask?
  </button>
 
  );
};

export default FloatingButton;
