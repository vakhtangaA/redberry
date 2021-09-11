import { useState, useEffect } from "react";

import roundLogo from "./assets/main-logo-round.svg";

import "./App.css";

function App() {
  return (
    <div className="logoParent">
      <img className="mainLogo" src={roundLogo} alt="" />
      <div className="slide-bottom">
        <button>კითხვარის დაწყება</button>
      </div>
    </div>
  );
}

export default App;
