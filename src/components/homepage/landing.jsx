import React, { Component } from "react";
import logo from "./styles/hero-img3.png";
import Media from "react-media";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";

import "./styles/landing-desktop.css";
import "./styles/landing-mobile.css";

import Insta from "../../assets/insta.png";
import Linked from "../../assets/linkedin.png";
import Twitt from "../../assets/twitter.png";
import Git from "../../assets/github.png";

class Landing extends Component {
  render() {
    function HireMe() {
      window.open(
        "mailto:soloyyz2000@yahoo.com?subject=Subject&body=Body%20goes%20here"
      );
    }
    function Instagram() {
      // <a href="https://www.w3schools.com" target="_blank" />;
      window.open("https://instagram.com/zazuzala?igshid=YmMyMTA2M2Y=");
    }
    function Twitter() {
      // <a href="https://www.w3schools.com" target="_blank" />;
      window.open(
        "https://twitter.com/zazulezaza?t=3IqZ9sFS5WoC4YdsIdntVw&s=09"
      );
    }
    function Linkedin() {
      // <a href="https://www.w3schools.com" target="_blank" />;
      window.open("https://ca.linkedin.com/in/shaiza-hashmi");
    }
    function Github() {
      // <a href="https://www.w3schools.com" target="_blank" />;
      window.open("https://github.com/Kayeris");
    }

    return (
      <div className="landing-body">
        {/* overall screen container */}
        <Media query="(max-width: 950px)">
          {(matches) =>
            matches ? (
              <div className="mobile-screen">
                <p className="my-name-mob">Hi, I'm Shaiza!</p>
                <p className="sub-occ-mob">
                  Programmer/Analyst, Writer, Photographer
                </p>
                <p className="edu-year-mob">
                  3rd year Honours @ University of Guelph
                </p>
                <div className="hero-banner-mob">
                  <div className="mobile-text">
                    <div className="position-one">
                      <p className="positions pink">VP Finance</p>
                      <p className="white-words"> SOCIS - Society of CIS</p>
                    </div>
                    <div className="position-two">
                      <p className="positions blue">President</p>
                      <p className="white-words">
                        {" "}
                        GCC - Guelph Coding Community
                      </p>
                    </div>
                    <div className="position-three">
                      <p className="positions green">VP Finance</p>
                      <p className="white-words"> SOCIS - Society of CIS</p>
                    </div>
                    <div className="position-four">
                      <p className="positions grey">VP Finance</p>
                      <p className="white-words"> SOCIS - Society of CIS</p>
                    </div>
                  </div>

                  <img className="hero-image-mob" src={logo} alt="hero image" />
                </div>
                <div className="align-the-button-mob">
                  <button className="hire-btn-mob" onClick={HireMe}>
                    Default
                  </button>
                  ;
                </div>
                <div className="button-socials-mob">
                  <a href="https://www.instagram.com/zazuzala/?hl=en">
                    <img
                      className="logo-mob"
                      src=" https://drive.google.com/thumbnail?id=19PhiHOa5cgpze8Zmm32hhwSS2YEVilQq"
                      alt="Instagram"
                    />
                  </a>
                  <a href="https://github.com/Kayeris">
                    <img
                      className="logo-mob"
                      src=" https://drive.google.com/thumbnail?id=1WpUXqCXeFupRsD87387x0z0AyUz91Tpa"
                      alt="Twitter"
                    />
                  </a>
                  <a href="https://ca.linkedin.com/in/shaiza-hashmi">
                    <img
                      className="logo-mob"
                      src=" https://drive.google.com/thumbnail?id=1Nypol6A3s2FH03M3pcCR2Wdi4RkihHZb"
                      alt="LinkedIN"
                    />
                  </a>
                  <a href="https://github.com/Kayeris">
                    <img
                      className="logo-mob"
                      src=" https://drive.google.com/thumbnail?id=1ak9tJRvzXBbFusse1RQcKxoMYf50_iE9"
                      alt="Github"
                    />
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="landing-desktop-format">
                  <div className="landing-left-column">
                    <div>
                      <p className="my-name">Hi, I'm Shaiza!</p>
                      <div classname="landing-subtitles">
                        <p className="sub-occupation">
                          Software Developer, Writer, Photographer
                        </p>
                        <p className="edu-year">
                          3rd year Honours @ University of Guelph
                        </p>
                      </div>
                    </div>
                    <div className="button-socials">
                      <div className="align-the-button">
                        <button className="hire-btn" onClick={HireMe}>
                          CONTACT ME
                        </button>{" "}
                      </div>
                      <img
                        className="socials-logos"
                        src={Insta}
                        alt="Instagram"
                        onClick={Instagram}
                      />

                      <img
                        className="socials-logos"
                        src=" https://drive.google.com/thumbnail?id=1WpUXqCXeFupRsD87387x0z0AyUz91Tpa"
                        alt="Twitter"
                        onClick={Twitter}
                      />
                      <img
                        className="socials-logos"
                        src=" https://drive.google.com/thumbnail?id=1Nypol6A3s2FH03M3pcCR2Wdi4RkihHZb"
                        alt="LinkedIN"
                        onClick={Linkedin}
                      />
                      <img
                        className="socials-logos"
                        src=" https://drive.google.com/thumbnail?id=1ak9tJRvzXBbFusse1RQcKxoMYf50_iE9"
                        alt="Github"
                        onClick={Github}
                      />
                    </div>
                  </div>
                  <img className="hero-image" src={logo} alt="hero image" />
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}

export default Landing;
