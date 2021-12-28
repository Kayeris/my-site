import React, { Component } from "react";
import logo from "./styles/hero-img3.png";
import Media from "react-media";
import "./styles/landing.css";
import "./styles/landing-mobile.css";

class Landing extends Component {
  render() {
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
                <p className="edu-year">
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
              </div>
            ) : (
              <div className="hero-banner">
                <div className="all-text">
                  <p className="my-name">Hi, I'm Shaiza!</p>
                  <p className="sub-occupation">
                    {" "}
                    Programmer/Analyst, Writer, Photographer
                  </p>
                  <p className="edu-year">
                    3rd year Honours @ University of Guelph
                  </p>
                  <p className="pos-one"> of Guelph Coding Community</p>
                  <p className="pos-two"> of GryphHacks</p>
                  <p className="pos-three">of SOCIS</p>
                  <p className="pos-four">
                    {" "}
                    of C3 - Canadian Computing Councils
                  </p>
                </div>
                <img className="hero-image" src={logo} alt="hero image" />
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}

export default Landing;
