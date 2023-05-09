import React, { useState, useEffect } from "react";
const CongratsMessage = ({ resetGame, gameOver, score }) => {
  const EndChecker = () => {
    console.log(score);
    if (gameOver) {
      return (
        <div className="end-game-message">
          <div>
            congrats! your score was {score.min} minutes and {score.sec}{" "}
            seconds!
          </div>
          <button onClick={resetGame}>New Game?</button>
        </div>
      );
    } else return;
  };

  return <EndChecker />;
};
export default CongratsMessage;
