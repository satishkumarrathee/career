'use client'

import React, { useState, useEffect } from 'react';
const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('WebSocket connected');
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      // Receive message from server
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      // Cleanup WebSocket connection
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const sendMessage = (message: string) => {
    if (socket) {
      // Send message to server
      socket.send(message);
      // Update messages state with sent message
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  };

  return (
    <div className="container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const message = e.currentTarget.value;
            sendMessage(message);
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
};

export default Chatbot;
