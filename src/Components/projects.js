import React, { Component } from "react";
import registerServiceWorker from "./../registerServiceWorker";
import ProjectItem from "./ProjectItem";

// we use map in the following because we are iterating through an array
// add a key to the ProjectItems of you will get an error
class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // console.log(project);
        return (
          <ProjectItem
            onDelete={this.deleteProject.bind(this)}
            key={project.title}
            project={project}
          />
        );
      });
    }
    // console.log(this.props);
    // when you return in a render, you can only have one element. For example, everything here is wrapped in a single DIV.
    return <div className="Projects">{projectItems}</div>;
  }
}

// Proptypes will throw warnings when type does not match
Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
};

export default Projects;
