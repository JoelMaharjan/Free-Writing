import React from "react";
import PropTypes from "prop-types";

function Navbar({ text }) {
  return (
    <div className="nav">
      <p className="nav-logo">FW</p>

      <ul>
        <li>Home</li>
        <li>Poems</li>
        <li>Articles</li>
        <li>Journal</li>

      </ul>
    </div>
  );
}

Navbar.propTypes = {
  text: PropTypes.string,
};

export default Navbar;
