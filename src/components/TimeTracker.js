import React, { useState, useEffect } from "react";
const TimeTracker = ({ gameState }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (gameState) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!gameState) {
      clearInterval(interval);
      setTimer(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [gameState]);

  return (
    <div className="game-info">
      <div>You have searched for: {timer} seconds</div>
    </div>
  );
};
export default TimeTracker;
