const UserClick = ({ userClick, onSelect }) => {
  /* userX and userY values can be obtained
  through using event.pageX im using event.clientX research difference later */

  if (userClick.hasClickedImage === true) {
    return (
      <div
        style={{
          position: "absolute",
          top: userClick.y,
          left: userClick.x,
        }}
      >
        <select onClick={onSelect}>
          <option data-value="hat">hat</option>
          <option data-value="nose">nose</option>
          <option data-value="leftfoot">left foot</option>
          {/* in the future would want to make an array or obj with the target names
        and then have the data-value created iteratively for easier scaling */}
        </select>
      </div>
    );
  }
};
export default UserClick;
