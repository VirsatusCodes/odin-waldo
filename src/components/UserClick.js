const UserClick = ({ userX, userY }) => {
  return (
    <div
      id="dropdown"
      style={{
        position: "absolute",
        top: userY,
        left: userX,
      }}
    >
      <select>
        <option>Hat</option>
        <option>Nose</option>
        <option>Left Foot</option>
      </select>
    </div>
  );
};
export default UserClick;
