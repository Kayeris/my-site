import React, { Component } from "react";
import Media from "react-media";
import "./styles/resume-mobile.css";
import "./styles/resume.css";
import profilepic from "./styles/picture.jpg";
import unipic from "./styles/guelphlogo.png";

class Resume extends Component {
  render() {
    return (
      <div className="resume-body">
        {/* conditional for either mobile or desktop mode*/}
        <Media query="(max-width: 950px)">
          {(matches) =>
            matches ? (
              <div className="mobile-mode">
                <p>
                  this is a placeholder so the code stays formatted otherwise
                  ima lost my brain
                </p>
              </div>
            ) : (
              <div className="desktop-mode">
                <div className="row-one">
                  <div className="profile">
                    <p className="heading">PROFILE</p>
                    <div className="profile-content">
                      <img
                        className="profile-picture"
                        src={profilepic}
                        alt="Profile Picture"
                      />
                      <div className="profile-text">
                        <p className="subheading">Hi! I'm Shaiza!</p>
                        <p className="regular-text">
                          Currently a 3rd year Honours Student at the University
                          of Guelph. Recognized for having a strong desire to
                          work with future technological leaders in the industry
                          for both professional and personal growth. A quick
                          learner, ready to overcome any challenges that come
                          her way.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="education">
                    <p className="heading">EDUCATION</p>
                    <p className="subheading">University of Guelph</p>
                    <div className="education-content">
                      <div className="ed-text">
                        <p className="uni-year">2019 - 2023</p>
                        <p>Bachelor of Computing, Honours</p>
                        <p className="specifics">Major: Computer Science</p>
                        <p className="specifics">Minor: Statistics</p>
                      </div>
                      <img
                        className="guelph-pic"
                        src={unipic}
                        alt="University of Guelph Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="row-two">
                  <div className="col-left">
                    <div className="skills">
                      <p className="heading">TECHNOLOGIES and FRAMEWORKS</p>
                      <p className="heading">INTERPERSONAL SKILLS</p>
                    </div>
                    <div className="extra">
                      <p className="heading">PROFILE</p>
                    </div>
                  </div>
                  <div className="projects">
                    <p className="heading">PROJECTS</p>
                  </div>
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}

export default Resume;
