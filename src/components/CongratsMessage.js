const CongratsMessage = ({ endGameMessage, resetGame }) => {
  return (
    <div className="end-game-message">
      <div>{endGameMessage()}</div>
      <button onClick={resetGame}>New Game?</button>
    </div>
  );
};
export default CongratsMessage;
