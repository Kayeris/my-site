import React, { Component } from "react";
import "./styles/blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="blog-body">
        {/* This div will hold all elements of the page */}
        <div className="coming-soon-blog-div">
          <p className="blog-soon">COMING SOON</p>
        </div>
      </div>
    );
  }
}

export default Blog;
