import React, { Component } from "react";
import Projects from "./projects";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav class="nav">
        <Link to="/" class="nav-link active">
          Home
        </Link>

        <Link to="/projects" class="nav-link active">
          Projects
        </Link>

        <Link to="/blogs" class="nav-link active">
          Blogs
        </Link>

        <Link to="/contactme" class="nav-link active">
          Contact Me
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
