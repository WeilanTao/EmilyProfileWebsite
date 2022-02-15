import React, { Component } from "react";
import PostService from "../service/PostService";

class Blogs extends Component {
  state = {};

  render() {
    PostService.getPosts().then(console.log("success"), (err) => alert(err));

    // console.log(PostService.getPosts);
    return <h1>Blogs</h1>;
  }
}

export default Blogs;
