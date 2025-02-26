'use client'
import React, { useState } from 'react';

const NotificationComponent: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div>
      <button onClick={handleShowNotification}>Show Notification</button>
      {showNotification && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'lightblue',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          Allow notification!
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;
