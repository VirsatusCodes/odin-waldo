import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import "./styling/generalStyling.css";
import backEndInfoMock from "./backEndInfoMock";
import RenderImage from "./components/RenderImage";
import UserClick from "./components/UserClick";
import TimeTracker from "./components/TimeTracker";
import CongratsMessage from "./components/CongratsMessage";
import GameStart from "./components/GameStart";

const firebaseConfig = {
  apiKey: "AIzaSyAlPkxaHlHQcU7YZONNQAk3sGexKpH3XFQ",
  authDomain: "waldo-c1949.firebaseapp.com",
  projectId: "waldo-c1949",
  storageBucket: "waldo-c1949.appspot.com",
  messagingSenderId: "836496786534",
  appId: "1:836496786534:web:37679bce919cd840b259a7",
};

const app = initializeApp(firebaseConfig);

const App = () => {
  const [backEndInfo, setBackEndInfo] = useState(backEndInfoMock);

  const [gameInfo, setGameInfo] = useState({
    gameStarted: false,
    clock: 0,
  });

  const [userClick, setUserClick] = useState({
    selectedDivClass: "",
    hasClickedImage: false,
    x: 0,
    y: 0,
  });

  const onClick = (e) => {
    if (userClick.hasClickedImage === false) {
      console.log("a");
      setUserClick({
        selectedDivClass: e.target.className,
        hasClickedImage: true,
        x: e.clientX,
        y: e.clientY,
      });
    } else if (userClick.hasClickedImage === true) {
      console.log("b");
      setUserClick({
        selectedDivClass: e.target.className,
        hasClickedImage: false,
        x: e.clientX,
        y: e.clientY,
      });
    }
    console.log(userClick);
    console.log(backEndInfo.targets);
  };

  useEffect(() => {}, []);

  const onSelect = (e) => {
    if (gameInfo.gameStarted !== false) {
      const userSelection = e.target.value;
      const transformedUserSelection = wordCollapser(userSelection);
      console.log(e.target.value);
      /* console.log(
      document.querySelector(`[data-value="${userSelection.selection}"]`)
        .dataset.value,
      "dataset"
    ); */
      console.log(transformedUserSelection);
      console.log(userClick.selectedDivClass);
      if (transformedUserSelection === userClick.selectedDivClass) {
        setBackEndInfo({
          ...backEndInfo,
          targets: {
            ...backEndInfo.targets,
            [transformedUserSelection]: true,
          },
        });
      }
    }
  };
  const wordCollapser = (words) => {
    let regEx = /\s/g;
    /* this regEx selects whitespace */
    return words.replace(regEx, "");
  };

  const gameState = () => {
    if (gameInfo.gameStarted === false) {
      setGameInfo({
        gameStarted: true,
        clock: 0,
      });
    }
    console.log(gameInfo.gameStarted);
  };

  const resetGame = () => {
    setBackEndInfo({
      ...backEndInfo,
      targets: {
        hat: false,
        nose: false,
        leftfoot: false,
      },
    });

    setUserClick({
      selectedDivClass: "",
      hasClickedImage: false,
      x: 0,
      y: 0,
    });

    setGameInfo({
      gameStarted: false,
      clock: 0,
    });
  };

  const endGameMessage = () => {
    let timeInSeconds = gameInfo.clock;
    let regEx = /(\w+)/g;
    let minutes = (timeInSeconds / 60).toString().match(regEx)[0];
    /* divide the seconds into a decimal value for time and take the
    minute value which is already in correct format */
    let seconds = (timeInSeconds / 60 - minutes) * 60;
    /* transofrm the decimal value for seconds into its proper time format */
    let time = `Congrats you won! your time was ${minutes} minutes and ${seconds.toFixed(
      0
    )} seconds.`;
    return time;
  };

  return (
    <div>
      <RenderImage
        imgInfo={backEndInfo.imageInfo}
        divInfo={backEndInfo.divInfo}
        onClick={onClick}
      />
      <TimeTracker gameState={"test"} />
      <UserClick userClick={userClick} onSelect={onSelect} />
      <GameStart gameStateSetter={gameState} />
      <CongratsMessage
        targets={backEndInfo.targets}
        endGameMessage={endGameMessage}
        resetGame={resetGame}
      />
    </div>
  );
};

export default App;
