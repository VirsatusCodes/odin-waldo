const TimeTracker = ({ onClick, userTime }) => {
  return (
    <div className="game-info">
      <button onClick={onClick}>Start!</button>
      <div>You have searched for: {userTime} seconds</div>
    </div>
  );
};
export default TimeTracker;
