import React, { Component } from "react";
import Projects from "./Components/projects";
import "./App.css";
import registerServiceWorker from "./registerServiceWorker";

class App extends Component {
  constructor() {
    // when adding a constructor in a class, you must first call super function
    super();
    this.state = {
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
    };
  }
  render() {
    // when you return in a render, you can only have one element. For example, everything here is wrapped in a single DIV.
    // import projects to appear below app content
    return (
      <div className="App">
        My app.
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
