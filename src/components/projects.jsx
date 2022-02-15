import React, { Component } from "react";
import PorjectService from "../service/ProjectService";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.#getProjects();
  }

  render() {
    return (
      <>
        <h1>Projects</h1>
        {this.state.projects.map((p) => this.#renderProject(p))}
      </>
    );
  }

  #renderProject(p) {
    if (p.node.isPublic !== false) {
      return (
        <div key={p.node.id}>
          <h3>{p.node.title}</h3>
          <h4>{p.node.description}</h4>
          <a href={p.node.githublink}>githublink</a>
          <img src={p.node.coverImage.url} alt="" />
        </div>
      );
    }
  }

  #getProjects() {
    PorjectService.getProjects()
      .then((response) => {
        // console.log(response);
        const newProjects = response.reverse();
        this.setState({ projects: newProjects });
      })
      .catch((err) => alert(err))
      .finally(console.log("success"));
  }
}

export default Projects;
