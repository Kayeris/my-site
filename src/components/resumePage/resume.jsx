import React, { Component } from "react";
import Media from "react-media";
import ReactTooltip from "react-tooltip";

import "./styles/resume-mobile.css";
import "./styles/resume.css";
import profilepic from "./styles/picture.jpg";
import unipic from "./styles/guelphlogo.png";
import htmllogo from "./styles/icons/html.png";
import javalogo from "./styles/icons/java.png";
import clogo from "./styles/icons/c.png";
import pythonlogo from "./styles/icons/python.png";
import csslogo from "./styles/icons/css.png";
import reactlogo from "./styles/icons/react.png";
import flutterlogo from "./styles/icons/flutter.png";
import nodelogo from "./styles/icons/nodejs.png";
import androidlogo from "./styles/icons/android.png";
import gitlogo from "./styles/icons/git logo.png";
import androidstudiologo from "./styles/icons/android-studio.png";
import debianlogo from "./styles/icons/debian.png";
import intellijlogo from "./styles/icons/intellij.png";
import vscodelogo from "./styles/icons/vscode.png";
import windowlogo from "./styles/icons/windows.png";

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
                          I'm a university student who's been involved with
                          technology, and more specifically, coding, for over 8
                          years. I currently specialize in design and front-end
                          development of websites, apps etc! I like to spend my
                          time mkaing things, either in creative aspects
                          (stories, poems, photography) or learning new tips &
                          tricks in the coding world!
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
                      <div className="all-icons">
                        <ReactTooltip id="LogoTip" />
                        <div className="row-tech">
                          <img
                            className="icon-sizes"
                            src={htmllogo}
                            alt="HTML"
                            data-tip="HTML"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={javalogo}
                            alt="Java"
                            data-tip="Java"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={clogo}
                            alt="C"
                            data-tip="C Programming Language"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={pythonlogo}
                            alt="Python"
                            data-tip="Python"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={csslogo}
                            alt="CSS"
                            data-tip="CSS"
                            data-for="LogoTip"
                          />
                        </div>
                        <div className="row-tech">
                          <img
                            className="icon-sizes"
                            src={reactlogo}
                            alt="React"
                            data-tip="React"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={flutterlogo}
                            alt="Flutter"
                            data-tip="Flutter"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={nodelogo}
                            alt="Node JS"
                            data-tip="Node js"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={androidlogo}
                            alt="Android"
                            data-tip="Andriod SDK"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={gitlogo}
                            alt="GIT"
                            data-tip="GIT with Gitlab & Github"
                            data-for="LogoTip"
                          />
                        </div>
                        <div className="row-tech">
                          <img
                            className="icon-sizes"
                            src={androidstudiologo}
                            alt="Android Studio"
                            data-tip="Android Studio"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={debianlogo}
                            alt="Debian Linux"
                            data-tip="Debian Linux"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={intellijlogo}
                            alt="IntelliJ Studio"
                            data-tip="IntelliJ Studio"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={windowlogo}
                            alt="Windows"
                            data-tip="Windows OS"
                            data-for="LogoTip"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="extra">
                      <p className="heading">EXTRACURRICULARS</p>
                      <div className="club">
                        <p className="position">President</p>
                        <p className="regular-text company">
                          Guelph Coding Community (GCC)
                        </p>
                        <p className="regular-text">
                          Founded in 2013, GCC facilitates student-run
                          workshops, tutorials, demos, networking sessions,
                          social nights, and presentations for students of all
                          backgrounds and skill-levels. GCC workshops are
                          designed by passionate students and guest speakers to
                          teach all manner of new skills. We focus on providing
                          students with valuable, hands-on, extracurricular tech
                          skills which cannot normally be acquired through
                          coursework.
                        </p>
                      </div>
                      <div className="club">
                        <p className="position">Co-Chairperson</p>
                        <p className="regular-text company">GryphHacks</p>
                        <p className="regular-text">
                          University of Guelph's official annual hackathon. An
                          organization run by students of Guelph Coding
                          Community (GCC). Our aim is to inspire, mentor, and
                          promote technological and social innovation through
                          collaborative work over the course of 48 hours.
                        </p>
                      </div>
                      <div className="club">
                        <p className="position">Director of Marketing</p>
                        <p className="regular-text company">
                          C3 - Computing Councils of Canada
                        </p>
                        <p className="regular-text">
                          The Computing Councils of Canada, also known as C^3
                          (or CCubed), is a national organization of students
                          aiming to create and foster an inclusive community for
                          all students in computing-related fields across
                          Canada. Our goal is to improve inter-school
                          collaboration between computing student organizations,
                          provide a support network, and connect students
                          nationwide through our events.
                        </p>
                      </div>
                      <div className="club">
                        <p className="position">Vice President Finance</p>
                        <p className="regular-text company">
                          Society of Computing Information Science (SOCIS)
                        </p>
                        <p className="regular-text">
                          The Official student society for the School of
                          Computer Science students at the University of Guelph.
                          SOCIS focuses on community building, creating
                          opportunities for students, and advocating for
                          students interests. We also run events, organize
                          hackathons, administer clubs, and represent School of
                          Computer Science students.
                        </p>
                      </div>
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
