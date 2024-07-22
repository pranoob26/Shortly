import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/urlshortner">
          <li>URL Shortner</li>
        </Link>
        <Link to="/credits">
          <li>Credits</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
