import React, { useState, useEffect } from "react";
const TimeTracker = ({ gameInfo }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (gameInfo.gameStarted) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [gameInfo.gameStarted]);

  return (
    <div className="game-info">
      <div>You have searched for: {timer} seconds</div>
    </div>
  );
};
export default TimeTracker;
