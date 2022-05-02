import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./styles/navbar.css";
import Logo from "../assets/logofile.png";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto left-link-section">
            <Nav.Link href="/zworld" className="navbar-links left-push-link ">
              Z WORLD
            </Nav.Link>
            <Nav.Link href="/blog" className="navbar-links right-push-link">
              BLOG
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="/home">
          <img src={Logo} alt="Brand Logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto left-link-section">
            <Nav.Link
              href="/resume"
              className="navbar-links left-push-link right-push-link"
            >
              RESUME
            </Nav.Link>
            <Nav.Link href="/projects" className="navbar-links">
              PROJECTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
