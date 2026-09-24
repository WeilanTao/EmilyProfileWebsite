import React, { Component } from "react";
// import Image from "../resource/twl.jpg";
import "../style/home.scss";

class Home extends Component {
  state = {
    // imgURL: "./resource/twl.jpg",
  };

  render() {
    return (
      <div className="selfIntroducecontainer">
        {/* <img src={Image} alt="emilytao" className="profilephoto" /> */}
        <p className="selfIntroduce">
          Hi👋 Welcome to my website 😊!
          <br></br>
          I graduated from the Computer Engineering program at the University of Waterloo.
          <br></br>I am a passionate software engineer with extensive experience in Java, Python, C++. 
          <br></br>I enjoy exploring new technologies and I am committed to designing and implementing robust software. 
          <br></br>In my spare time, I enjoy digital painting 🎨, music 🎵 and reading 📖.
          <br></br>Feel free to reach out to me 🤝.
        </p>
      </div>
    );
  }
}

export default Home;
