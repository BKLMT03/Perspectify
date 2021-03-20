import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Logo from './components/Logo'
import Container from './components/Container'
import Col from './components/Col'
import Navbar from './components/Navbar'
import Row from './components/Row'
import ProfileName from './components/ProfileName'
import ProfilePic from './components/ProfilePic'
import SavedArticles from './components/SavedArticles'
import Home from "./pages/Home"

function App () {
  return (
    <div className='App'>
      <Logo />
      <Router>
        <Container>
          <Row>
            <Col size='1'>
              <Navbar />
            </Col>
            <Col size='10'>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/savedarticles' component={ProfileName} />
              <Route exact path='/savedarticles' component={ProfilePic} />
              <Route exact path='/savedarticles' component={SavedArticles} />
              {/* <Route exact path='/savedarticles' component={SavedArticles} /> */}
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
