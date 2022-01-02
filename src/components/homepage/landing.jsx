import React, { Component } from "react";
import logo from "./styles/hero-img3.png";
import Media from "react-media";
import { Link, NavLink } from "react-router-dom";

import "./styles/landing.css";
import "./styles/landing-mobile.css";

class Landing extends Component {
  render() {
    function HireMe() {
      window.open(
        "mailto:soloyyz2000@yahoo.com?subject=Subject&body=Body%20goes%20here"
      );
    }

    return (
      <div className="landing-body">
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
                <div className="hero-banner">
                  <div className="all-text">
                    <p className="my-name">Hi, I'm Shaiza!</p>
                    <p className="sub-occupation">
                      Programmer/Analyst, Writer, Photographer
                    </p>
                    <p className="edu-year">
                      3rd year Honours @ University of Guelph
                    </p>
                    <p className="pos-one"> of Guelph Coding Community</p>
                    <p className="pos-two"> of GryphHacks</p>
                    <p className="pos-three">of SOCIS</p>
                    <p className="pos-four">
                      of C3 - Canadian Computing Councils
                    </p>
                    <div className="button-socials">
                      <div className="align-the-button">
                        <button className="hire-btn" onClick={HireMe}>
                          Default
                        </button>
                        ;
                      </div>
                      <img
                        className="logo-img"
                        src=" https://drive.google.com/thumbnail?id=19PhiHOa5cgpze8Zmm32hhwSS2YEVilQq"
                        alt="Instagram"
                      />
                      <img
                        className="logo-img"
                        src=" https://drive.google.com/thumbnail?id=1WpUXqCXeFupRsD87387x0z0AyUz91Tpa"
                        alt="Twitter"
                      />
                      <img
                        className="logo-img"
                        src=" https://drive.google.com/thumbnail?id=1Nypol6A3s2FH03M3pcCR2Wdi4RkihHZb"
                        alt="LinkedIN"
                      />
                      <img
                        className="logo-img"
                        src=" https://drive.google.com/thumbnail?id=1ak9tJRvzXBbFusse1RQcKxoMYf50_iE9"
                        alt="Github"
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
