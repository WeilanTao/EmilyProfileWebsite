import React, { Component } from "react";
import PostService from "../service/PostService";

class Blogs extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.#getPostArray();
  }
  render() {
    // this.#getPostArray();

    return (
      <>
        <h1>Blogs</h1>
        {this.state.posts.map((p) => this.#renderPost(p))}
      </>
    );
  }

  #renderPost(p) {
    if (p.node.isPublic !== false)
      return (
        <div>
          <h3>{p.node.title}</h3>
          <h3>{p.node.content}</h3>
        </div>
      );
  }
  #getPostArray() {
    PostService.getPosts()
      .then((response) => {
        console.log(response);
        const newPosts = response;
        this.setState({ posts: newPosts });
      })
      .catch((err) => alert(err))
      .finally(console.log("success"));
  }
}

export default Blogs;
