import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import githubLogo from "../images/githubLogo.png";
import "./style.css";

function Footer() {
  return (
    <div className="container-fluid app-footer mt-5">
      <a href="https://github.com/BKLMT03/Perspectify">
        <img src={githubLogo} alt="Github logo" />
      </a>
      {/* <div id="bklmt03">
        <span className="B">B</span>
        <span className="K">K</span>
        <span className="L">L</span>
        <span className="M">M</span>
        <span className="T">T</span>
        <span className="oh-three">03</span>
      </div> */}
    </div>
  );
}

export default Footer;
