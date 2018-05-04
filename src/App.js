import React, { Component } from "react";
import Projects from "./Components/projects";
import uuid from "uuid";
import AddProject from "./Components/AddProject";
import "./App.css";
import registerServiceWorker from "./registerServiceWorker";

// where you set the state is not usually where you want to house the data, instead add your state as an empty array

class App extends Component {
  constructor() {
    // when adding a constructor in a class, you must first call super function
    super();
    this.state = {
      projects: []
    };
  }

  // lifecycle method: look up all the lifecycle methods on the documentation, they render at different time. For example: componentDidMount
  // this is where you will add information that you grab through an API
getTodos({

})

getProjects(){
  this.setState({
    projects: [
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web Design"
      },
      {
        id: uuid.v4(),
        title: "Social App",
        category: "Mobile Development"
      },
      {
        id: uuid.v4(),
        title: "Ecommerce Shopping Card",
        category: "Web Development"
      }
    ]
  });
}

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  // when you get information from an API, do it using componentDidMount
  componentDidMount(){

  }

  handleAddProject(project) {
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

  render() {
    // when you return in a render, you can only have one element. For example, everything here is wrapped in a single DIV.
    // import projects to appear below app content
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
      </div>
    );
  }
}

export default App;
