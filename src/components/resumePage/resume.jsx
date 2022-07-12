import React, { Component } from "react";
import Media from "react-media";
import ReactTooltip from "react-tooltip";
import Collapsible from "react-collapsible";

import "./styles/resume-mobile.css";
import "./styles/resume-desktop.css";

// contact info imports
import greenLinkedin from "../../assets/green-linkedin.svg";
import greenphone from "../../assets/green-phone.svg";
import greenemail from "../../assets/green-mail.svg";
import greenfigma from "../../assets/green-figma.svg";
import greengit from "../../assets/greengithub.svg";
import greendev from "../../assets/greendev.svg";

import profileicon from "../../assets/profile-icon.png";
import wrenchicon from "../../assets/wrench.svg";
import laptopicon from "../../assets/laptop-code.svg";
import toolboxicon from "../../assets/toolbox.svg";
import gradicon from "../../assets/grad-cap.svg";

// all imported logos for skillsets
import reactlogo from "../../assets/icons/react.png";
import htmllogo from "../../assets/icons/html.png";
import csslogo from "../../assets/icons/css.png";
import javascripylogo from "../../assets/icons/javascript.png";
import nodelogo from "../../assets/icons/nodejs.png";

import androidlogo from "../../assets/icons/android.png";
import flutterlogo from "../../assets/icons/flutter.png";
import autodesklogo from "../../assets/icons/autodesk-suite.png";
import webgllogo from "../../assets/icons/webgl.png";

import figmalogo from "../../assets/icons/Figma-logo.svg";
import javalogo from "../../assets/icons/java.png";
import clogo from "../../assets/icons/c.png";
import pythonlogo from "../../assets/icons/python.png";
import gitlogo from "../../assets/icons/git logo.png";

import androidstudiologo from "../../assets/icons/android-studio.png";
import vscodelogo from "../../assets/icons/vscode.png";
import debianlogo from "../../assets/icons/debian.png";
import intellijlogo from "../../assets/icons/intellij.png";
import bashlogo from "../../assets/icons/bash.png";

class Resume extends Component {
  render() {
    // const [open, setOpen] = useState(false);
    return (
      <div className="resume-body">
        {/* conditional for either mobile or desktop mode*/}
        <Media query="(max-width: 950px)">
          {(matches) =>
            matches ? (
              <div className="mobile-mode">
                <div className="resume-mobile-margins">
                  <div className="mobile-banner row-flex">
                    <img
                      src={profileicon}
                      alt="Profile icon - Girl with Wavy Hair"
                      className="mobile-profile-icon"
                    />
                    <div className="name-and-job">
                      <p className="mobile-name-banner">Shaiza Hashmi,</p>
                      <p className="mobile-job-banner">Software Developer</p>
                    </div>
                  </div>
                  <div className="mobile-banner-text">
                    <p>
                      Currently a 4th year Honours Student at the University of
                      Guelph. Recognized for having a strong desire to work with
                      future technological leaders in the industry for both
                      professional and personal growth. A quick learner, ready
                      to overcome any challenges that come her way.
                    </p>
                    <p>
                      I'm a university student who's been involved with
                      technology, and more specifically, coding, for over 8
                      years. I currently specialize in design and front-end
                      development of websites, apps etc! I like to spend my time
                      making things, either in creative aspects (stories, poems,
                      photography) or learning new tips & tricks in the coding
                      world!
                    </p>
                  </div>

                  <div>
                    <Collapsible
                      trigger="🖋 EDUCATION ►"
                      triggerWhenOpen="🖋 EDUCATION ▼"
                      className="collapsible-label-closed"
                      openedClassName="collapsible-label-open"
                    >
                      <div className="education-card bg-card-colour">
                        <div className="mobile-inst-year row-flex">
                          <p className="no-bottom-margin">
                            UNIVERSITY OF GUELPH
                          </p>
                          <p className="educard-year no-bottom-margin">
                            2019 - 2024
                          </p>
                        </div>
                        <div className="education-details no-bottom-margin">
                          <p className="no-bottom-margin">
                            Bachelor of Computing, Honours
                          </p>
                          <p className="no-bottom-margin italicize">
                            Major: Computer Science
                          </p>
                          <p className="no-bottom-margin italicize">
                            Minor: Statistics
                          </p>
                        </div>
                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger="🛠 TOOLS & TECHNOLOGIES ►"
                      triggerWhenOpen="🛠 TOOLS & TECHNOLOGIES ▼"
                      className="collapsible-label-closed"
                      openedClassName="collapsible-label-open"
                    >
                      <div className="tools-n-tech bg-card-colour">
                        <div>
                          <ReactTooltip id="LogoTip" />
                          <div className="row-tech">
                            <img
                              className="mobile-tools-icons"
                              src={reactlogo}
                              alt="React"
                              data-tip="React"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={htmllogo}
                              alt="HTML"
                              data-tip="HTML"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={csslogo}
                              alt="CSS"
                              data-tip="CSS"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={javascripylogo}
                              alt="Javascript"
                              data-tip="Javascript"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={nodelogo}
                              alt="Node"
                              data-tip="Node"
                              data-for="LogoTip"
                            />
                          </div>
                          <div className="row-tech">
                            <img
                              className="mobile-tools-icons"
                              src={androidlogo}
                              alt="Android"
                              data-tip="Android"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={flutterlogo}
                              alt="Flutter"
                              data-tip="Flutter"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={autodesklogo}
                              alt="Autodesk Suite"
                              data-tip="Autodesk Suite"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={webgllogo}
                              alt="WebGL"
                              data-tip="WebGL"
                              data-for="LogoTip"
                            />
                          </div>
                          <div className="row-tech">
                            <img
                              className="mobile-tools-icons"
                              src={figmalogo}
                              alt="Figma"
                              data-tip="Figma"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={javalogo}
                              alt="Java"
                              data-tip="Java"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={clogo}
                              alt="C Programming Language"
                              data-tip="C Programming Language"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={pythonlogo}
                              alt="Python"
                              data-tip="Python"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={gitlogo}
                              alt="Git"
                              data-tip="Git"
                              data-for="LogoTip"
                            />
                          </div>
                          <div className="row-tech">
                            <img
                              className="mobile-tools-icons"
                              src={androidstudiologo}
                              alt="Android Studio"
                              data-tip="Android Studio"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={vscodelogo}
                              alt="VSCode"
                              data-tip="Visual Studio Code"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={debianlogo}
                              alt="Debian Linux"
                              data-tip="Debian Linux"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={intellijlogo}
                              alt="IntelliJ Studio"
                              data-tip="IntelliJ Studio"
                              data-for="LogoTip"
                            />
                            <img
                              className="mobile-tools-icons"
                              src={bashlogo}
                              alt="Bash"
                              data-tip="Bash"
                              data-for="LogoTip"
                            />
                          </div>
                        </div>
                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger="♠ PROJECTS ►"
                      triggerWhenOpen="♠ PROJECTS ▼"
                      className="collapsible-label-closed"
                      openedClassName="collapsible-label-open"
                    >
                      <div className="mobile-proj bg-card-colour">
                        <div className="project-card">
                          <p className="no-bottom-margin mobile-proj-title">
                            PROJECT LOWKATION
                          </p>
                          <p className="no-bottom-margin mobile-proj-subtitle">
                            MapHacks - Overall First Place Winner
                          </p>
                          <ul className="mobile-proj-details">
                            <li>
                              Designed & created wireframe prototype of the
                              entire site, to a completed prototype using Figma
                              within 8 hours.
                            </li>
                            <li>
                              Used React, HTML, CSS and Javascript to establish
                              and design various web Pages on the front-end
                            </li>
                            <li>
                              A progressive web application where users can sign
                              up and contribute to an ever-growing collection of
                              hidden locations across the world, and view
                              others’ postings as well.
                            </li>
                          </ul>
                        </div>
                        <div className="project-card">
                          <p className="no-bottom-margin mobile-proj-title">
                            SPHERES - 2D & 3D GRAPHICS
                          </p>
                          <p className="no-bottom-margin mobile-proj-subtitle">
                            Exploring WebGL basics + implementation
                          </p>
                          <ul className="mobile-proj-details">
                            <li>
                              Implemented 2D and 3D graphics through Geometry
                              and matrix algebra for computer graphics using
                              Javascript, Python and WebGL.
                            </li>
                            <li>
                              Using visible surface detection and geometric
                              modelling - including raytracing, rendered various
                              forms of 3D graphics.
                            </li>
                            <li>
                              Rendered rotating cubes, moving light sources,
                              shadows and shaded vertices, and various
                              polymorphic objects.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger="☆ PROFESSIONAL EXPERIENCE ►"
                      triggerWhenOpen="☆ PROFESSIONAL EXPERIENCE ▼"
                      className="collapsible-label-closed"
                      openedClassName="collapsible-label-open"
                    >
                      <div className="professional-exp bg-card-colour">
                        <div className="pro-exp-card ">
                          <p className="no-bottom-margin mobile-proexp-title">
                            CO-FOUNDER & CO-CHAIRPERSON
                          </p>
                          <p className="no-bottom-margin mobile-proexp-subtitle italicize">
                            GryphHacks @ University of Guelph
                          </p>
                          <ul className="mobile-proexp-details">
                            <li>
                              Create and build from the ground up an
                              organization at the university under the SOCCSO.
                            </li>
                            <li>
                              Create and lead a team of 20+ students, to
                              facilitate and organize a yearly international
                              event, hosted by the university, partnered with
                              MLH.
                            </li>
                            <li>
                              Foster relationships with various companies,
                              organizations and external partners to allow
                              Guelph Computing students a chance to learn and
                              gain industry-level skills, right at the
                              university.
                            </li>
                            <li>
                              Promote internationally for hackers, mentors and
                              judges alike.
                            </li>
                            <li>
                              Form a bridge between the university and alumni
                              for current students to take advantage and learn
                              the tips and tricks needed to survive in a
                              competitive industry.
                            </li>
                          </ul>
                        </div>
                        <div className="pro-exp-card ">
                          <p className="no-bottom-margin mobile-proexp-title">
                            CO-FOUNDER & DIRECTOR OF MARKETING
                          </p>
                          <p className="no-bottom-margin mobile-proexp-subtitle italicize">
                            Ccubed - A Nonprofit Organization
                          </p>
                          <ul className="mobile-proexp-details">
                            Manage a team of students, dedicated to the
                            following:
                            <li>
                              Create and organize all marketing graphics,
                              announcements and information relayed to the
                              students regarding club events and important
                              notices.
                            </li>
                            <li>
                              Build up and manage all 7+ social media accounts
                              of this organization, interacting with 1000+
                              students nationwide and 30+ other Universities'
                              equivalent CS student governments to foster
                              mutually beneficial relations to spread word about
                              our events.
                            </li>
                            <li>
                              Repost and spread the word of our partnered
                              Universities' events and materials to further aid
                              and increase their outreach.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Collapsible>
                    <Collapsible
                      trigger="✆ CONTACT ME ► "
                      triggerWhenOpen="✆ CONTACT ME ▼"
                      className="collapsible-label-closed"
                      openedClassName="collapsible-label-open"
                    >
                      <div className="column-flex">
                        <div className="mobile-contact">
                          <img
                            src={greenphone}
                            alt="Phone Icon"
                            className="mobile-contact-icon"
                          />
                          <p className="mobile-contact-text">416-912-8654</p>
                        </div>
                        <div className="mobile-contact">
                          <img
                            src={greenLinkedin}
                            alt="Phone Icon"
                            className="mobile-contact-icon"
                          />
                          <p className="mobile-contact-text">
                            in/shaiza-hashmi
                          </p>
                        </div>
                        <div className="mobile-contact">
                          <img
                            src={greenemail}
                            alt="Phone Icon"
                            className="mobile-contact-icon"
                          />
                          <p className="mobile-contact-text">
                            contactme@zasha.tech
                          </p>
                        </div>
                      </div>
                    </Collapsible>
                  </div>
                </div>
              </div>
            ) : (
              <div className="desktop-mode">
                {/*desktop mode general div*/}
                <div className="general-banner-row">
                  <div id="title-and-occupation">
                    <p className="resume-name-heading">Shaiza Hashmi</p>
                    <p className="resume-occupation-heading">
                      Software Developer
                    </p>
                  </div>
                  <div className="contact-information">
                    <div className="phone-num contact-info-line">
                      <p>xxx-xxx-xxxx</p>
                      <img
                        src={greenphone}
                        alt="Linkedin Logo"
                        className="contact-icons"
                      />
                    </div>
                    <div className="linkedin contact-info-line">
                      <p>in/shaiza-hashmi</p>
                      <img
                        src={greenLinkedin}
                        alt="Linkedin Logo"
                        className="contact-icons"
                      />
                    </div>
                    <div className="email contact-info-line">
                      <p>contactme@zasha.tech</p>
                      <img
                        src={greenemail}
                        alt="Linkedin Logo"
                        className="contact-icons"
                      />
                    </div>
                  </div>
                </div>
                <div className="profile-blurb">
                  <img
                    className="profile-icon"
                    src={profileicon}
                    alt="Icon Picture, Girl with Curly Hair"
                  />
                  <div>
                    <p className="blurb-text">
                      Currently a 4th year Honours Student at the University of
                      Guelph. Recognized for having a strong desire to work with
                      future technological leaders in the industry for both
                      professional and personal growth. A quick learner, ready
                      to overcome any challenges that come her way.
                    </p>
                    <p className="blurb-text">
                      I'm a university student who's been involved with
                      technology, and more specifically, coding, for over 8
                      years. I currently specialize in design and front-end
                      development of websites, apps etc! I like to spend my time
                      making things, either in creative aspects (stories, poems,
                      photography) or learning new tips & tricks in the coding
                      world!
                    </p>
                  </div>
                </div>
                <div className="rest-of-page">
                  <div className="left-column">
                    <div className="skills-tech column-border">
                      <div className="box-header">
                        <img
                          src={wrenchicon}
                          alt="wrench icon"
                          className="box-icon"
                        />
                        <p className="box-header-text">TOOLS & TECHNOLOGIES</p>
                      </div>

                      <div className="all-tool-icons">
                        <ReactTooltip id="LogoTip" />
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
                            src={htmllogo}
                            alt="HTML"
                            data-tip="HTML"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={csslogo}
                            alt="CSS"
                            data-tip="CSS"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={javascripylogo}
                            alt="Javascript"
                            data-tip="Javascript"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={nodelogo}
                            alt="Node"
                            data-tip="Node"
                            data-for="LogoTip"
                          />
                        </div>
                        <div className="row-tech">
                          <img
                            className="icon-sizes"
                            src={androidlogo}
                            alt="Android"
                            data-tip="Android"
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
                            src={autodesklogo}
                            alt="Autodesk Suite"
                            data-tip="Autodesk Suite"
                            data-for="LogoTip"
                          />
                          <img
                            className="icon-sizes"
                            src={webgllogo}
                            alt="WebGL"
                            data-tip="WebGL"
                            data-for="LogoTip"
                          />
                        </div>
                        <div className="row-tech">
                          <img
                            className="icon-sizes"
                            src={figmalogo}
                            alt="Figma"
                            data-tip="Figma"
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
                            alt="C Programming Language"
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
                            src={gitlogo}
                            alt="Git"
                            data-tip="Git"
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
                            src={vscodelogo}
                            alt="VSCode"
                            data-tip="Visual Studio Code"
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
                            src={bashlogo}
                            alt="Bash"
                            data-tip="Bash"
                            data-for="LogoTip"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="projects column-border">
                      <div className="box-header">
                        <img
                          src={toolboxicon}
                          alt="wrench icon"
                          className="box-icon"
                        />
                        <p className="box-header-text">PROJECTS</p>
                      </div>
                      <div className="a-project row-flex">
                        <div className="project-info">
                          <p className="proj-title">Project LowKations</p>
                          <p className="proj-subtitle">
                            MapHacks - First Place Overall Winner
                          </p>
                          <ul class="style-change">
                            <li>
                              Designed & created wireframe prototype of the
                              entire site, to a completed prototype using Figma
                              within 8 hours.
                            </li>
                            <li>
                              Used React, HTML, CSS and Javascript to establish
                              and design various web Pages on the front-end
                            </li>
                            <li>
                              A progressive web application where users can sign
                              up and contribute to an ever-growing collection of
                              hidden locations across the world, and view
                              others’ postings as well.
                            </li>
                          </ul>
                        </div>
                        <div className="links">
                          <img
                            src={greenfigma}
                            alt="Lowkations Figma File"
                            className="project-icon"
                          />
                          <img
                            src={greengit}
                            alt="Lowkations Github Repo"
                            className="project-icon"
                          />
                          <img
                            src={greendev}
                            alt="Lowkations Devpost Submission"
                            className="project-icon"
                          />
                        </div>
                      </div>
                      <div className="a-project row-flex">
                        <div className="project-info">
                          <p className="proj-title">
                            Spheres - 2D & 3D Graphics
                          </p>
                          <p className="proj-subtitle">
                            Exploring WebGL basics + implementation
                          </p>
                          <ul class="style-change">
                            <li>
                              Implemented 2D and 3D graphics through Geometry
                              and matrix algebra for computer graphics using
                              Javascript, Python and WebGL.
                            </li>
                            <li>
                              Using visible surface detection and geometric
                              modelling - including raytracing, rendered various
                              forms of 3D graphics.
                            </li>
                            <li>
                              Rendered rotating cubes, moving light sources,
                              shadows and shaded vertices, and various
                              polymorphic objects.
                            </li>
                          </ul>
                        </div>
                        <div className="links">
                          <img
                            src={greenfigma}
                            alt="Lowkations Figma File"
                            className="project-icon"
                          />
                          <img
                            src={greengit}
                            alt="Lowkations Github Repo"
                            className="project-icon"
                          />
                          <img
                            src={greendev}
                            alt="Lowkations Devpost Submission"
                            className="project-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="middle-separator"></div>
                  <div className="right-column ">
                    <div className="education column-border">
                      <div className="box-header">
                        <img
                          src={gradicon}
                          alt="wrench icon"
                          className="box-icon"
                        />
                        <p className="box-header-text">EDUCATION</p>
                      </div>
                      <div className="row-flex">
                        <p className="institute">UNIVERSITY OF GUELPH</p>
                        <p className="resume-edu-year">2019 - Present</p>
                      </div>
                      <p className="bachelor">Bachelor of Computing, Honours</p>
                      <p className="focuses">Major: Computer Science</p>
                      <p className="focuses">Minor: Statistics</p>
                      <div className="row-flex">
                        <p className="clubs-title">
                          President - Guelph Coding Community
                        </p>
                        <p className="clubs-dates">Jan 2020 - May 2022</p>
                      </div>
                      <div className="row-flex">
                        <p className="clubs-title">
                          VP Finance - Society of Computing Information Science
                        </p>
                        <p className="clubs-dates">May 2020 - May 2022</p>
                      </div>
                      <div className="row-flex">
                        <p className="clubs-title">Web Developer - iGEM</p>
                        <p className="clubs-dates">Feb 2022 - Present</p>
                      </div>
                      <div className="row-flex">
                        <p className="clubs-title">
                          Head of Marketing - HawkHacks
                        </p>
                        <p className="clubs-dates">Jan 2022 - May 2022</p>
                      </div>
                    </div>
                    <div className="pro-exp column-border">
                      <div className="box-header">
                        <img
                          src={laptopicon}
                          alt="wrench icon"
                          className="box-icon"
                        />
                        <p className="box-header-text">
                          PROFESSIONAL EXPERIENCE
                        </p>
                      </div>
                      <div className="club">
                        <p className="club-pos">
                          Co-Founder and Co-Chairperson
                        </p>
                        <p className="club-name">
                          GryphHacks @ University of Guelph
                        </p>
                        <p className="club-years">May 2021 - Present</p>
                        <ul className="style-change">
                          <li>
                            Create and build from the ground up an organization
                            at the university under the SOCCSO.
                          </li>
                          <li>
                            Create and lead a team of 20+ students, to
                            facilitate and organize a yearly international
                            event, hosted by the university, partnered with MLH.
                          </li>
                          <li>
                            Foster relationships with various companies,
                            organizations and external partners to allow Guelph
                            Computing students a chance to learn and gain
                            industry-level skills, right at the university.
                          </li>
                          <li>
                            Promote internationally for hackers, mentors and
                            judges alike.
                          </li>
                          <li>
                            Form a bridge between the university and alumni for
                            current students to take advantage and learn the
                            tips and tricks needed to survive in a competitive
                            industry.
                          </li>
                        </ul>
                      </div>
                      <div className="club">
                        <p className="club-pos">
                          Co-Founder and Director of Marketing
                        </p>
                        <p className="club-name">
                          Ccubed - A Nonprofit Organization
                        </p>
                        <p className="club-years">Oct 2020 - Present</p>
                        <ul className="style-change">
                          Manage a team of students, dedicated to the following:
                          <li>
                            Create and organize all marketing graphics,
                            announcements and information relayed to the
                            students regarding club events and important
                            notices.
                          </li>
                          <li>
                            Build up and manage all 7+ social media accounts of
                            this organization, interacting with 1000+ students
                            nationwide and 30+ other Universities' equivalent CS
                            student governments to foster mutually beneficial
                            relations to spread word about our events.
                          </li>
                          <li>
                            Repost and spread the word of our partnered
                            Universities' events and materials to further aid
                            and increase their outreach.
                          </li>
                        </ul>
                      </div>
                    </div>
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
