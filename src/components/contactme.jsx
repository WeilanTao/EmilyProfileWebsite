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
            <a>
              Github Account
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
