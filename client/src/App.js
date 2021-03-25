import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Logo from './components/Logo'
import Container from './components/Container'
import Col from './components/Col'
import Navbar from './components/Navbar'
import Row from './components/Row'
import ArticleDiscussionPage from './components/pages/ArticleDiscussionPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./pages/Home"
import Trending from "./components/Trending"

function App () {
  return (
    <div className='App'>
      <Logo />
      <Router>
        <Container>
          {/* <Header /> */}
          <Row>
            <Col size='1'>
              <Navbar />
            </Col>
            <Col size='10'>
              {/* <Route exact path='/' component={Login} /> */}
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route exact path='/' component={Trending} />
              <Route exact path='/home' component={Trending} />
              <Route exact path='/Discussion' component={ArticleDiscussionPage} />
              {/* <Route exact path='/savedarticles' component={SavedArticles} /> */}
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
