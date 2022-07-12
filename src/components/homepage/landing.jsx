import React, { Component } from "react";
import heroimage from "../../assets/hero-img3.png";
import Media from "react-media";

import "./styles/landing-desktop.css";
import "./styles/landing-mobile.css";

import Insta from "../../assets/insta.png";
import Linked from "../../assets/linkedin.png";
import Twitt from "../../assets/twitter.png";
import Git from "../../assets/github.png";
import mobileHero from "../../assets/mobile-landing.png";

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
                {/* mobile screen render */}
                <div className="hero-parent">
                  <img
                    className="hero-image-mob"
                    src={mobileHero}
                    alt="Robotoc Hand holding globe"
                  />
                  <div className="mobile-text">
                    <p className="my-name-mob">Hi,</p>
                    <p className="my-name-mob">I'm Shaiza!</p>
                    <p className="sub-occ-mob">
                      Software Developer, Writer, Photographer
                    </p>
                    <p className="edu-year-mob">
                      4th year Honours @ University of Guelph
                    </p>
                    <div className="align-the-button-mob">
                      <button className="hire-btn-mob" onClick={HireMe}>
                        CONTACT ME
                      </button>{" "}
                      <img
                        className="socials-logos-mob"
                        src={Insta}
                        alt="Instagram"
                        onClick={Instagram}
                      />
                      <img
                        className="socials-logos-mob"
                        src={Twitt}
                        alt="Twitter"
                        onClick={Twitter}
                      />
                      <img
                        className="socials-logos-mob"
                        src={Linked}
                        alt="LinkedIN"
                        onClick={Linkedin}
                      />
                      <img
                        className="socials-logos-mob"
                        src={Git}
                        alt="Github"
                        onClick={Github}
                      />
                    </div>
                  </div>
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
                          4th year Honours @ University of Guelph
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
                        src={Twitt}
                        alt="Twitter"
                        onClick={Twitter}
                      />
                      <img
                        className="socials-logos"
                        src={Linked}
                        alt="LinkedIN"
                        onClick={Linkedin}
                      />
                      <img
                        className="socials-logos"
                        src={Git}
                        alt="Github"
                        onClick={Github}
                      />
                    </div>
                  </div>
                  <img
                    className="hero-image"
                    src={heroimage}
                    alt="hero image"
                  />
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
