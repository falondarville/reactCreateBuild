import React, { Component } from "react";
import registerServiceWorker from "./../registerServiceWorker";

// we use map in the following because we are iterating through an array
// add a key to the ProjectItems of you will get an error
class AddProject extends Component {
  render() {
    return (
      <div>
        <h3 Add Project />
      </div>
    );
  }
}

export default AddProject;
