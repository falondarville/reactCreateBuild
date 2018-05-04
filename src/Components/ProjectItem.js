import React, { Component } from "react";
import registerServiceWorker from "./../registerServiceWorker";

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>
        : {this.props.project.category} ID: {this.props.project.id}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
        >
          X
        </a>
      </li>
    );
  }
}

// Proptypes will throw warnings when type does not match
ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
};

export default ProjectItem;
