const CongratsMessage = ({ targets, endGameMessage, resetGame }) => {
  for (const target in targets) {
    if (targets[target] === false) {
      console.log("should NOT render endgame screen");
      return;
    }
  }

  return (
    <div className="end-game-message">
      <div>{endGameMessage()}</div>
      <button onClick={resetGame}>New Game?</button>
    </div>
  );
};
export default CongratsMessage;
