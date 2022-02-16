import React, { Component } from "react";
import PorjectService from "../service/ProjectService";
import "../style/projects.scss";
class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.#getProjects();
  }

  render() {
    return (
      <div className="projectContainer">
        {this.state.projects.map((p) => this.#renderProject(p))}
      </div>
    );
  }

  #renderProject(p) {
    if (p.node.isPublic !== false) {
      return (
        <div key={p.node.id}>
          <div class="card" className="card">
            <img
              src={p.node.coverImage.url}
              class="card-img-top"
              alt=""
              className="coverImg"
            />
            <div class="textArea">
              <p className="card-title">{p.node.title}</p>
              <p className="card-text">{p.node.description}</p>
              <a
                href={p.node.githublink}
                className="codeButton"
                target="_blank"
              >
                Source Code
              </a>
            </div>
          </div>
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
