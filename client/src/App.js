import "./App.css";
import {React, useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "./components/Logo";
import ContainerX from "./components/Container";
import Col from "./components/Col";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Footer from "./components/Footer";
import ArticleDiscussionPage from "./components/pages/ArticleDiscussionPage";
import About from "./components/pages/About"
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Trending from "./components/Trending";
import Profile from "./components/Profile";
import Particles from "./components/Particles"
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeToggle from "react-dark-mode-toggle";
import {loadUser} from './actions/authActions'
import {useDispatch} from 'react-redux'
//import Container from reactstrap

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const dispatch = useDispatch();
  dispatch(loadUser())

  const changeBackground = () => {
    if (!isDarkMode) {
    document.documentElement.style.setProperty("--color-secondary", "rgb(228, 228, 228)");
    document.documentElement.style.setProperty("--color-text", "");
    } else {
      document.documentElement.style.setProperty("--color-secondary", "rgb(24, 25, 26)");
      document.documentElement.style.setProperty("--color-text", "rgb(228, 228, 228)");
    }
    
  }
  useEffect(async () => {
    await changeBackground();
    
    })
  return (
    <div>
      <Particles />
      <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
      <Logo />
      <Router>
        <ContainerX>
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
        </ContainerX>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
