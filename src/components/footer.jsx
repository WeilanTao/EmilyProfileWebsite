import React, { Component } from "react";
import "../style/footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <p>All Rights Reserved {new Date().getFullYear()} Emily Weilan Tao</p>
    </div>
  );
};

export default Footer;
