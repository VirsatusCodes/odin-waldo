const RenderImage = ({ backEndInfo, onClick }) => {
  return (
    <div
      className="imgContainer"
      style={{
        width: backEndInfo.imageInfo.imageContainerWidth,
        height: backEndInfo.imageInfo.imageContainerHeight,
      }}
    >
      <div onClick={onClick} className="hat"></div>
      <div onClick={onClick} className="nose"></div>
      <div onClick={onClick} className="leftfoot"></div>
      <img
        src={backEndInfo.imageInfo.reference}
        alt={"search board"}
        onClick={onClick}
      />
    </div>
  );
};
export default RenderImage;
