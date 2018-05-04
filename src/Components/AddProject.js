import React, { Component } from "react";
import registerServiceWorker from "./../registerServiceWorker";

// we use map in the following because we are iterating through an array
// add a key to the ProjectItems of you will get an error
class AddProject extends Component {
  static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile Development"]
  };
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value="category">
          {category}
        </option>
      );
    });
    return (
      <div>
        <h3 Add Project />
        <form>
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
        </form>
      </div>
    );
  }
}

export default AddProject;
