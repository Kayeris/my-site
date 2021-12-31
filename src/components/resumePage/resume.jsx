import React, { Component } from "react";
import Media from "react-media";
import "./styles/resume-mobile.css";
import "./styles/resume.css";

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
                    This is a demo box to illustrate the code given in
                    thesitewizard.com's tutorial on creating coloured boxes.
                  </div>
                  <div className="education">
                    This is a demo box to illustrate the code given in
                    thesitewizard.com's tutorial on creating coloured boxes.
                  </div>
                </div>
                <div className="row-two">
                  <div className="col-left">
                    <div className="skills">
                      This is a demo box to illustrate the code given in
                      thesitewizard.com's tutorial on creating coloured boxes.
                    </div>
                    <div className="extra">
                      This is a demo box to illustrate the code given in
                      thesitewizard.com's tutorial on creating coloured boxes.
                    </div>
                  </div>
                  <div className="projects">
                    This is a demo box to illustrate the code given in
                    thesitewizard.com's tutorial on creating coloured boxes.
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
