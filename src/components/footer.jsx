import React, { Component } from "react";
import "../style/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="bg">
        <p>All Rights Reserved {new Date().getFullYear()} Emily Weilan Tao</p>
      </div>
    </div>
  );
};

export default Footer;
