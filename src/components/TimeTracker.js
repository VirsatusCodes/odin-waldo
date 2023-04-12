import React, { useState, useEffect } from "react";
const TimeTracker = ({ gameInfo, timer }) => {
  useEffect(() => {
    const interval = timer;
    if (gameInfo.gameStarted) {
      interval();
    }
    console.log(gameInfo.gameStarted, "test");
    return () => clearInterval(interval);
  }, [gameInfo.gameStarted]);

  return (
    <div className="game-info">
      <div>You have searched for: {gameInfo.clock} seconds</div>
    </div>
  );
};
export default TimeTracker;
