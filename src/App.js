import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import "./styling/generalStyling.css";
import penguin from "./imgs/penguin.png";
import RenderImage from "./components/RenderImage";
import UserClick from "./components/UserClick";

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

    console.log(userClick.clicked);
    console.log(userClick.x);
    console.log(e.clientX);
    console.log(typeof userClick.x);
  };

  const UserClickCheck = () => {
    if (userClick.clicked === true) {
      return <UserClick userX={userClick.x} userY={userClick.y} />;
    }
  };
  return (
    <div>
      <RenderImage img={penguin} onClick={onClick} />
      <UserClickCheck />
    </div>
  );
};

export default App;
