import React, { Component } from "react";
import Projects from "./projects";
import { Link } from "react-router-dom";
import "../style/navbar.scss";

const NavBar = () => {
  return (
    <div className="navarea">
      <nav class="nav">
        <Link to="/" class="nav-link" className="navblock">
          Home
        </Link>

        <Link to="/projects" class="nav-link " className="navblock">
          Projects
        </Link>

        <Link to="/blogs" class="nav-link " className="navblock">
          Blogs
        </Link>

        <Link to="/contactme" class="nav-link " className="navblock">
          Contact Me
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
