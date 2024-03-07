import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
function Navbar() {
  return (
    <>
      <div className="Navbar">
        {/* Mobile Hamburger */}
        <div className="Links">
          <Link to="/" className="Links_items">
            Home
          </Link>
          <Link to="/projects" className="Links_items">
            Projects
          </Link>
          <Link to="experience" className="Links_items">
            Contact me
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
