import React, { Component } from "react";
import PostService from "../service/PostService";
import "../style/blog.scss";

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
      <div className="blogsContainer">
        {this.state.posts.map((p) => this.#renderPost(p))}
      </div>
    );
  }

  #renderPost(p) {
    if (p.node.isPublic !== false) {
      const { photo } = p.node;
      const { url } = photo[0] || "";
      const htmlString = p.node.content.html || "";
      return (
        <div key={p.node.id} className="blog">
          <div className="content title">{p.node.title}</div>
          <div className="content date">{p.node.displayDate}</div>
          {/* Hey this is the if condition in react - html!!!!! */}
          {photo[0] && <img src={url} alt="" className="img content" />}
          <div
            className="content content"
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: htmlString }}
          ></div>
        </div>
      );
    }
  }

  #getPostArray() {
    PostService.getPosts()
      .then((response) => {
        const newPosts = response;
        this.setState({ posts: newPosts });
      })
      .catch((err) => alert(err))
      .finally(console.log("success"));
  }
}

export default Blogs;
