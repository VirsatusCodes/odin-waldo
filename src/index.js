import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "App.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlPkxaHlHQcU7YZONNQAk3sGexKpH3XFQ",
  authDomain: "waldo-c1949.firebaseapp.com",
  projectId: "waldo-c1949",
  storageBucket: "waldo-c1949.appspot.com",
  messagingSenderId: "836496786534",
  appId: "1:836496786534:web:37679bce919cd840b259a7",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
