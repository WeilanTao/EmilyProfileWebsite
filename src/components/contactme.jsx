import React, { Component } from "react";
import MyResume from "../resource/Emily_Tao_Resume.pdf";
const Contactme = () => {
  return (
    <>
      <h1>Contact me</h1>
      <ul>
        <li>
          <a href="https://github.com/WeilanTao" target="_blank">
            Checkout my Github account!
          </a>
          .
        </li>
        <li>
          <a href="https://github.com/WeilanTao" target="_blank">
            Please connect with me on LinkedIn if I can help.
          </a>
          .
        </li>
        <li>
          <a href="mailto:twlemily@hotmail.ca">
            Contact me by email. I am responsive here.
          </a>
          .
        </li>
        <li>
          <a href={MyResume} download>
            Grab a copy of MY Resume.
          </a>
        </li>
      </ul>
    </>
  );
};

export default Contactme;
