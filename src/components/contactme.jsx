import React, { Component } from "react";
import MyResume from "../resource/Emily_Tao_Resume.pdf";
import "../style/contactme.scss";
const Contactme = () => {
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
          <a className="link" href={MyResume} download>
            Grab MY Resume
          </a>
        </li>
      </ul>
    </>
  );
};

export default Contactme;
