import React, { Component } from "react";
import Projects from "./Components/projects";
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
  componentWillMount() {
    this.setState({
      projects: [
        {
          title: "Business Website",
          category: "Web Design"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        },
        {
          title: "Ecommerce Shopping Card",
          category: "Web Development"
        }
      ]
    });
  }

  render() {
    // when you return in a render, you can only have one element. For example, everything here is wrapped in a single DIV.
    // import projects to appear below app content
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
