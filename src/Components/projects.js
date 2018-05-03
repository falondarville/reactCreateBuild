import React, { Component } from "react";
import registerServiceWorker from "./../registerServiceWorker";

class Projects extends Component {
  render() {
    console.log(this.props);
    // when you return in a render, you can only have one element. For example, everything here is wrapped in a single DIV.
    return (
      <div className="Projects">
        My projects.
        {this.props.test}
      </div>
    );
  }
}

export default Projects;
