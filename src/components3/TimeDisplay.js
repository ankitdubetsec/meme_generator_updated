import React, { useState } from 'react';

function TimeDisplay(props) {
  const [currentTime, setCurrentTime] = useState('');

  const Click = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    setCurrentTime(timeString);
  };

  return (
    <div>
      <button onClick={Click}>Show Time</button>
      {currentTime && <p>Current Time: {currentTime}</p>}
    </div>
  );
}

export default TimeDisplay;
