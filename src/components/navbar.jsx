import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/navbar.css";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <div className="right-link-section">
          <Link to="/zworld" className="navbar-links">
            Z-WORLD
          </Link>
          <Link to="/blog" className="navbar-links">
            BLOG
          </Link>
          <Link to="/resume" className="navbar-links">
            RESUME
          </Link>
          <Link to="/projects" className="navbar-links">
            PROJECTS
          </Link>
        </div>
        {/* <div className="left-link-section">
          <Link to="/zworld" className="navbar-links">
            Z-WORLD
          </Link>
          <Link to="/blog" className="navbar-links">
            BLOG
          </Link>
        </div> */}

        <div className="logo-section">
          <Link to="/home" className="navbar-links">
            <img
              className="logo"
              src=" https://drive.google.com/thumbnail?id=1euumg_1ICISd3mKBNc0TWGHFZmuEisVA"
              alt="LOGO"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
