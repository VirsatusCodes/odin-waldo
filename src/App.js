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

  const [gameState, setGameState] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const [gameTime, setGameTime] = useState({
    start: 0,
    end: 0,
  });

  const [userClick, setUserClick] = useState({
    selectedDivClass: "",
    hasClickedImage: false,
    x: 0,
    y: 0,
  });

  const [score, setScore] = useState({
    currentScore: {
      min: 0,
      sec: 0,
    },
    highScore: {
      min: 0,
      sec: 0,
    },
  });

  const onClick = (e) => {
    if (userClick.hasClickedImage === false) {
      setUserClick({
        selectedDivClass: e.target.className,
        hasClickedImage: true,
        x: e.clientX,
        y: e.clientY,
      });
    } else if (userClick.hasClickedImage === true) {
      setUserClick({
        selectedDivClass: e.target.className,
        hasClickedImage: false,
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  useEffect(() => {
    gameEnd();
    scoreSetter();
  }, [backEndInfo.targets, gameOver]);

  const onSelect = (e) => {
    if (gameState) {
      const userSelection = e.target.value;
      const transformedUserSelection = wordCollapser(userSelection);

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

  const targetChecker = (object) => {
    for (const key in object) {
      if (object[key] === false) {
        return false;
      }
    }
    return true;
  };

  const gameStart = () => {
    if (!gameState) {
      setGameState(true);
      setGameTime({
        start: Date.now(),
        end: 0,
      });
    }
  };

  const gameEnd = () => {
    if (gameState && targetChecker(backEndInfo.targets)) {
      setGameTime({
        ...gameTime,
        end: Date.now(),
      });

      setGameOver(true);
    }
  };

  const resetGame = () => {
    setBackEndInfo({
      ...backEndInfo,
      targets: {
        hat: true,
        nose: true,
        leftfoot: false,
      },
    });

    setUserClick({
      selectedDivClass: "",
      hasClickedImage: false,
      x: 0,
      y: 0,
    });

    setGameState(false);

    setGameTime({
      start: 0,
      end: 0,
    });

    setGameOver(false);

    setScore({
      ...setScore,
      currentScore: {
        min: 0,
        sec: 0,
      },
    });
  };

  const scoreSetter = () => {
    let timeInSeconds = Math.floor((gameTime.end - gameTime.start) / 1000);
    let newMin = Math.floor(timeInSeconds / 60);
    let newSec = timeInSeconds % 60;
    console.log(newMin, newSec, "asde");
    setScore({
      ...score,
      currentScore: {
        min: newMin,
        sec: newSec,
      },
    });
  };

  const endTime = () => {
    setGameTime({
      ...gameTime,
      end: Date.now(),
    });
  };

  return (
    <div>
      <RenderImage
        imgInfo={backEndInfo.imageInfo}
        divInfo={backEndInfo.divInfo}
        onClick={onClick}
      />
      <TimeTracker gameState={gameState} />
      <UserClick userClick={userClick} onSelect={onSelect} />
      <GameStart gameStateSetter={gameStart} />

      <CongratsMessage
        resetGame={resetGame}
        gameOver={gameOver}
        score={score.currentScore}
      />
    </div>
  );
};

export default App;
