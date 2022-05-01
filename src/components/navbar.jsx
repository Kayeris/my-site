import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./styles/navbar.css";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <div className="right-link-section">
          <Nav.Link href="/zworld" className="navbar-links">
            Z WORLD
          </Nav.Link>
          {/* <NavDropdown title="Z WORLD" href="/zworld" className="navbar-links">
            <NavDropdown.Item className="navbar-links">Action</NavDropdown.Item>
            <NavDropdown.Item className="navbar-links">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="/blog" className="navbar-links">
            BLOG
          </Nav.Link>
          <Nav.Link href="/resume" className="navbar-links">
            RESUME
          </Nav.Link>
          <Nav.Link href="/projects" className="navbar-links">
            PROJECTS
          </Nav.Link>
        </div>
        <div className="logo-section">
          <Nav.Link href="/home" className="navbar-links">
            <img
              className="logo"
              src=" https://drive.google.com/thumbnail?id=1euumg_1ICISd3mKBNc0TWGHFZmuEisVA"
              alt="LOGO"
            />
          </Nav.Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
