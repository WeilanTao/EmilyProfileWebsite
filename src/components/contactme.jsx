import React, { Component } from "react";
import MyResume from "../resource/Emily_Tao_Resume.pdf";
const Contactme = () => {
  return (
    <>
      <h1>Contact me</h1>
      <ul>
        <li>
          <a href="https://github.com/WeilanTao">Github</a>.
        </li>
        <li>
          <a href="https://github.com/WeilanTao">LinkedIn</a>.
        </li>
        <li>
          <a href="mailto:twlemily@hotmail.ca">EmailMe</a>.
        </li>
        <li>
          <a href={MyResume} download>
            MY Resume
          </a>
        </li>
      </ul>
    </>
  );
};

export default Contactme;
