import React from "react";
import { Link } from "react-router-dom";

import roundLogo from "../assets/main-logo-round.svg";

function Start() {
  return (
    <div className="logoParent">
      <img className="mainLogo" src={roundLogo} alt="" />
      <div className="slide-bottom">
        <Link to="identification">
          <button>კითხვარის დაწყება</button>
        </Link>
      </div>
    </div>
  );
}

export default Start;
