const RenderImage = ({ img, onClick }) => {
  return (
    <div className="imgContainer">
      <div className="hat"></div>
      <div className="nose"></div>
      <div className="left-foot"></div>
      <img src={img} alt={"search board"} onClick={onClick} />
    </div>
  );
};
export default RenderImage;
