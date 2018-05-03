import React, { Component } from "react";
import registerServiceWorker from "./../registerServiceWorker";

class ProjectItem extends Component {
  render() {
    console.log(this.props);
    // when you return in a render, you can only have one element. For example, everything here is wrapped in a single DIV.
    // you can't use class as an attribute here, so you must use className
    return <li className="Projects">My projects.</li>;
  }
}

export default ProjectItem;
