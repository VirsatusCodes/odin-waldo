const UserClick = ({ userX, userY, onClick }) => {
  /* userX and userY values can be obtained
  through using event.pageX im using event.clientX research difference later */

  return (
    <div
      style={{
        position: "absolute",
        top: userY,
        left: userX,
      }}
    >
      <select onClick={onClick}>
        <option data-value="hat">hat</option>
        <option data-value="nose">nose</option>
        <option data-value="leftfoot">left foot</option>
        {/* in the future would want to make an array or obj with the target names
        and then have the data-value created iteratively for easier scaling */}
      </select>
    </div>
  );
};
export default UserClick;
