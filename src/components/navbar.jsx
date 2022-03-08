import React, { Component } from "react";
import Projects from "./projects";
import { Link } from "react-router-dom";
import "../style/navbar.scss";

const NavBar = () => {
  return (
    <div className="navarea">
      <nav class="nav">
        <Link to="/" class="nav-link" className="navblock">
          <div class="nav_button">Home</div>
        </Link>

        <Link to="/projects" class="nav-link " className="navblock">
          <div class="nav_button">Projects</div>
        </Link>

        <Link to="/blogs" class="nav-link " className="navblock">
          <div class="nav_button">Blog</div>
        </Link>

        <Link to="/contactme" class="nav-link " className="navblock">
          <div class="nav_button">Contact Me</div>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
