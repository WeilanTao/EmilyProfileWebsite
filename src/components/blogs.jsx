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
    if (p.node.isPublic !== false) {
      const { photo } = p.node;
      const { url } = photo[0] || "";

      return (
        <div key={p.node.id}>
          <h3>{p.node.title}</h3>
          <h4>{p.node.content}</h4>
          <img src={url} alt="" />
        </div>
      );
    }
  }
  #getPostArray() {
    PostService.getPosts()
      .then((response) => {
        console.log(response);
        const newPosts = response.reverse();
        this.setState({ posts: newPosts });
      })
      .catch((err) => alert(err))
      .finally(console.log("success"));
  }
}

export default Blogs;
