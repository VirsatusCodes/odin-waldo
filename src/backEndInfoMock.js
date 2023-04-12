import penguin from "./imgs/penguin.png";

const backEndInfoMock = {
  imageInfo: {
    reference: penguin,
    imageContainerHeight: 444,
    imageContainerWidth: 441,
  },
  targets: {
    hat: true,
    nose: true,
    leftfoot: false,
  },
  divInfo: {
    hat: {
      size: {
        width: 100,
        height: 80,
      },
      location: {
        left: 115,
        top: 28,
      },
    },
    nose: {
      size: {
        width: 46,
        height: 45,
      },
      location: {
        left: 206,
        top: 115,
      },
    },
    leftfoot: {
      size: {
        width: 57,
        height: 52,
      },
      location: {
        right: 104,
        bottom: 4,
      },
    },
  },
};

export default backEndInfoMock;
