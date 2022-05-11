import React, { Component } from "react";
import Media from "react-media";
import Tabs from "./tabs";

import "./styles/projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-body">
        {/* This div will hold all elements of the page */}
        <div className="coming-soon-blog-div">
          <p className="blog-soon">COMING SOON</p>
        </div>
      </div>
      // <div className="projects-body">
      //   {/* This div will hold all elements of the page */}
      //   <Media query="(max-width: 950px)">
      //     {(matches) =>
      //       matches ? (
      //         <div className="mobile-projects"></div>
      //       ) : (
      //         <div className="desktop-projects">
      //           <h1>Tabs Demo</h1>
      //           <Tabs>
      //             <div label="Gator" className="tab-screen">
      //               See ya later, <em>Alligator</em>!
      //             </div>
      //             <div label="Croc">
      //               After 'while, <em>Crocodile</em>!
      //             </div>
      //             <div label="Sarcosuchus">
      //               Nothing to see here, this tab is <em>extinct</em>!
      //             </div>
      //             <div label="Apple">
      //               See ya later, <em>APPLES WHO WEEE</em>!
      //             </div>
      //             <div label="Potato">
      //               After 'while, <em>GREENS BEANS POTATOES TOMATIOS</em>!
      //             </div>
      //             <div label="Tomato">
      //               Nothing to see here, this tab is <em>TOMATO SAUCE</em>!
      //             </div>
      //           </Tabs>
      //         </div>
      //       )
      //     }
      //   </Media>
      // </div>
    );
  }
}

export default Projects;
