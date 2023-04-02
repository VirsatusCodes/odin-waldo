const RenderImage = ({ img, onClick }) => {
  return (
    <div className="imgContainer">
      <img src={img} alt={"search board"} onClick={onClick} />
    </div>
  );
};
export default RenderImage;
