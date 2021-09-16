import React from "react";
import { Link } from "react-router-dom";

function Final() {
  return (
    <div className="final">
      <div>
        <h1>THANKS</h1>
        <p>🤘მადლობა რომ დაგვითმე დრო და შეავსე კითხვარი</p>
        <Link to="/result">ნახე შენი პასუხები</Link>
      </div>
    </div>
  );
}

export default Final;
