import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./components/Logo";
import Container from "./components/Container";
import Col from "./components/Col";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Footer from "./components/Footer";
import ArticleDiscussionPage from "./components/pages/ArticleDiscussionPage";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/pages/About"
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Trending from "./components/Trending";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Logo />
      <Router>
        <Container>
          <Row>
            <Col size="1">
              <Navbar />
            </Col>
            <Col size="10">
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route exact path="/" component={Trending} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/Discussion"
                component={ArticleDiscussionPage}
              />
              <Route exact path="/profile" component={Profile} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
