import React from "react";
import { Link } from "react-router-dom";
// import Typed from "react-typed";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./style.css";
import SignUp from "../pages/SignUp";

function Header() {
  return (
    <div className="container text-center header mb-5">
      <Row>
        <h3 className="subtitle mt-4 mb-5">
          {/* <Typed
            strings={[
              "Earn Your Opinion.",
              "Escape the echo chamber.",
              "Challenge your beliefs.",
              "Think before you speak.",
              "PERSPECTIFY yourself.",
            ]}
            startDelay={100}
            typeSpeed={80}
            backSpeed={40}
            loop
          /> */}
        </h3>
      </Row>
      <Row>
        <p></p>
        <p>
          Easily find the latest news on <a href="#trending-section">trending topics</a> from a variety of news
          sources and points of view all in one place.
        </p>

        <p>
          <Link to="/sign-up">Sign up</Link> to discuss with other PERSPECTIFIED
          minds.
        </p>
      </Row>
    </div>
  );
}

export default Header;
