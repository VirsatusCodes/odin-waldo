const GameStart = ({ gameStateSetter }) => {
  return (
    <div className="game-start">
      <button onClick={gameStateSetter}>Start!</button>
    </div>
  );
};
export default GameStart;
