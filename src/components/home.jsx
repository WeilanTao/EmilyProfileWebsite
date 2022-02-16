import React, { Component } from "react";
import Image from "../resource/twl.jpg";

class Home extends Component {
  state = {
    // imgURL: "./resource/twl.jpg",
  };

  render() {
    return (
      <>
        <img src={Image} alt="emilytao" />
        <p>
          I major in Computer Engineering @ the University of Waterloo. I am a
          passionate Java developer profession in web development. I love to try
          various cool technologies. In my spare time, I enjoy charcoal
          painting, music and building personal projects. Please feel free to
          contact me!
        </p>
      </>
    );
  }
}

export default Home;
