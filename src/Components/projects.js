import React, { Component } from "react";
import registerServiceWorker from "./../registerServiceWorker";

// we use map in the following because we are iterating through an array
class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // console.log(project);
        return;
      });
    }
    console.log(this.props);
    // when you return in a render, you can only have one element. For example, everything here is wrapped in a single DIV.
    return <div className="Projects">My projects.</div>;
  }
}

export default Projects;
