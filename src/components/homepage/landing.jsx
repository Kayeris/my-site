import React, { Component } from "react";
import logo from "./styles/hero-img.png";
import "./styles/landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing-body">
        <div className="hero-banner">
          <div className="all-text">
            <p className="my-name">Hi, I'm Shaiza!</p>
            <p className="sub-occupation"> Programmer, Writer, Photographer</p>
            <p className="edu-year">3rd year Honours @ University of Guelph</p>
            <p className="pos-one"> of Guelph Coding Community</p>
            <p className="pos-two"> of GryphHacks</p>
            <p className="pos-three">of SOCIS</p>
            <p className="pos-four"> of C3 - Canadian Computing Councils</p>
          </div>
          <img className="hero-image" src={logo} alt="hero image" />
        </div>
        {/* <p className="per-page">lets see where this ends up rendering</p> */}
      </div>
    );
  }
}

export default Landing;
