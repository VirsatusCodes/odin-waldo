import React, { useState, useEffect } from "react";
const TimeTracker = ({ gameState }) => {
  const [userClock, setUserClock] = useState({
    time: 0,
  });

  const timer = () => {
    if (gameState.started === true) {
      setInterval(() => {
        setUserClock(userClock + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    if (gameState.started) {
      setInterval(() => {
        setUserClock({
          time: (userClock.time += 1),
        });
        console.log(userClock.time);
      }, 1000);
    } else if (!gameState.started) {
      setUserClock({
        time: 0,
      });
    }
  }, [gameState.started]);

  return (
    <div className="game-info">
      <div>You have searched for: {userClock.time} seconds</div>
    </div>
  );
};
export default TimeTracker;
