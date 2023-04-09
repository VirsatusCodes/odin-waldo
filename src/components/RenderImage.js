const RenderImage = ({ img, onClick }) => {
  return (
    <div className="imgContainer">
      <div onClick={onClick} className="hat"></div>
      <div onClick={onClick} className="nose"></div>
      <div onClick={onClick} className="leftfoot"></div>
      <img src={img} alt={"search board"} onClick={onClick} />
    </div>
  );
};
export default RenderImage;
