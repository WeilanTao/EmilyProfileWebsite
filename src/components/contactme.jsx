import React, { Component } from "react";
import "../style/contactme.scss";
import ResumeService from "../service/ResumeService";

class Contactme extends Component {
  state = { resumeUrl: "" };

  componentDidMount() {
    this.#getPostArray();
  }

  render() {
    return (
      <>
        <ul className="ulList">
          <li>
            <a
              className="link"
              href="https://github.com/WeilanTao"
              target="_blank"
            >
              Github Account
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://github.com/WeilanTao"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link" href="mailto:twlemily@hotmail.ca">
              Email Me
            </a>
          </li>
          <li>
            <a
              className="link"
              href={this.state.resumeUrl}
              target="_blank"
              download
            >
              Grab My Resume
            </a>
          </li>
        </ul>
      </>
    );
  }

  #getPostArray() {
    ResumeService.getResume()
      .then((response) => {
        const { url } = response[0].node.resume;
        this.setState({ resumeUrl: url });
      })
      .catch((err) => alert(err))
      .finally(console.log("success"));
  }
}

export default Contactme;
