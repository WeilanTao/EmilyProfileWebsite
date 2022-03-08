import React, { Component } from "react";
import Image from "../resource/twl.jpg";
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
          I major in Electrical and Computer Engineering @ the University of
          Waterloo.
          <br></br>I am a passionate developer and I am cool with Java, C# and
          C. I love to try various technologies. <br></br>In my spare time, I
          enjoy digital painting, music and building personal projects.
        </p>
      </div>
    );
  }
}

export default Home;
