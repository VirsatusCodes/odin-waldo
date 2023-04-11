import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import "./styling/generalStyling.css";
import penguin from "./imgs/penguin.png";
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
  const [userClick, setUserClick] = useState({
    clicked: false,
    x: 0,
    y: 0,
  });
  const [gameStatus, setGameStatus] = useState({
    started: false,
  });
  const [targetsTracker, setTargetsTracker] = useState({
    hat: true,
    nose: true,
    leftfoot: false,
  });
  const [userClickLocationClass, setUserClickLocationClass] = useState({
    selection: "",
  });

  const onClick = (e) => {
    if (userClick.clicked === false) {
      setUserClick({
        clicked: true,
        x: e.clientX,
        y: e.clientY,
      });
    } else if (userClick.clicked === true) {
      setUserClick({
        clicked: false,
        x: e.clientX,
        y: e.clientY,
      });
    }
    setUserClickLocationClass({
      selection: e.target.className,
    });
  };

  const onSelect = (e) => {
    if (gameStatus.started !== false) {
      const userSelection = e.target.value;
      const transformedUserSelection = wordCollapser(userSelection);
      console.log(e.target.value);
      /* console.log(
      document.querySelector(`[data-value="${userSelection.selection}"]`)
        .dataset.value,
      "dataset"
    ); */
      console.log(transformedUserSelection);
      console.log(userClickLocationClass.selection);
      if (transformedUserSelection === userClickLocationClass.selection) {
        setTargetsTracker({
          ...targetsTracker,
          [transformedUserSelection]: true,
        });
      }
    }
  };
  const wordCollapser = (words) => {
    let regEx = /\s/g;
    /* this regEx selects whitespace */
    return words.replace(regEx, "");
  };

  const ScoreMonitor = () => {
    for (const target in targetsTracker) {
      if (targetsTracker[target] === false) {
        return;
      }
    }

    return (
      <CongratsMessage endGameMessage={endGameMessage} resetGame={resetGame} />
    );
  };
  const gameState = () => {
    if (gameStatus.started === false) {
      setGameStatus({
        started: true,
      });
    }
    console.log(gameStatus.started);
  };

  const resetGame = () => {
    setTargetsTracker({
      hat: false,
      nose: false,
      leftfoot: false,
    });

    setUserClick({
      clicked: false,
      x: 0,
      y: 0,
    });

    setGameStatus({
      started: false,
    });
  };

  const endGameMessage = () => {
    let timeInSeconds = gameStatus.clock;
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

  const UserClickCheck = () => {
    if (userClick.clicked === true) {
      return (
        <UserClick userX={userClick.x} userY={userClick.y} onClick={onSelect} />
      );
    }
  };
  return (
    <div>
      <RenderImage img={penguin} onClick={onClick} />
      <TimeTracker gameState={gameStatus} />
      <UserClickCheck />
      <GameStart gameStateSetter={gameState} />
      <ScoreMonitor />
    </div>
  );
};

export default App;
