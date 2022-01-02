import React, { Component } from "react";
import Media from "react-media";

import "./styles/projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-body">
        {/* This div will hold all elements of the page */}
        <Media query="(max-width: 950px)">
          {(matches) =>
            matches ? (
              <div className="mobile-projects"></div>
            ) : (
              <div className="desktop-projects"></div>
            )
          }
        </Media>
      </div>
    );
  }
}

export default Projects;
