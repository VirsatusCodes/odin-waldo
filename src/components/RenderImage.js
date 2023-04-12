const RenderImage = ({ imgInfo, divInfo, onClick }) => {
  return (
    <div
      className="imgContainer"
      style={{
        width: imgInfo.imageContainerWidth,
        height: imgInfo.imageContainerHeight,
      }}
    >
      <div
        onClick={onClick}
        className="hat"
        style={{
          width: divInfo.hat.size.width,
          height: divInfo.hat.size.height,
          left: divInfo.hat.location.left,
          top: divInfo.hat.location.top,
        }}
      ></div>
      <div
        onClick={onClick}
        className="nose"
        style={{
          width: divInfo.nose.size.width,
          height: divInfo.nose.size.height,
          left: divInfo.nose.location.left,
          top: divInfo.nose.location.top,
        }}
      ></div>
      <div
        onClick={onClick}
        className="leftfoot"
        style={{
          width: divInfo.leftfoot.size.width,
          height: divInfo.leftfoot.size.height,
          right: divInfo.leftfoot.location.right,
          bottom: divInfo.leftfoot.location.bottom,
        }}
      ></div>
      <img src={imgInfo.reference} alt={"search board"} onClick={onClick} />
    </div>
  );
};
export default RenderImage;
