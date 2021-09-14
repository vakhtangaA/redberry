import { string } from "prop-types";
import React from "react";

function Navbar({ text, pages }) {
  return (
    <div className="headerNav">
      <span>{text}</span>
      <span>{pages}</span>
    </div>
  );
}

export default Navbar;

Navbar.prototypes = {
  text: string,
  pages: string,
};
