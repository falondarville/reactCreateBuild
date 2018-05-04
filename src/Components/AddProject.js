import React, { Component } from "react";
import registerServiceWorker from "./../registerServiceWorker";
import uuid from "uuid";

// we use map in the following because we are iterating through an array
// add a key to the ProjectItems of you will get an error
// each component has its own state, move variables like title and category to different components using properties
class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }
  static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile Development"]
  };

  handleSubmit(event) {
    if (this.refs.title.value === "") {
      alert("Please enter a project title");
    } else {
      this.setState(
        {
          newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        function() {
          // console.log(this.state);
          this.props.addProject(this.state.newProject);
        }
      );
    }
    event.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div>
        <h3 Add Project />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <br />
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
