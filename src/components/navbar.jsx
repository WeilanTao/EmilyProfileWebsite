import React, { Component } from "react";
import Projects from "./projects";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contactme">Contact Me</Link>
      </li>
    </ul>
  );
};

export default NavBar;
