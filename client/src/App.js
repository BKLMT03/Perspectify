import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Trending from './components/Trending'
import Logo from './components/Logo'
import Container from './components/Container'
import Col from './components/Col'
import Navbar from './components/Navbar'
import Row from './components/Row'
import ProfileName from './components/ProfileName'
import ProfilePic from './components/ProfilePic'
import SavedArticles from './components/SavedArticles'

function App () {
  return (
    <div className='App'>
      <Logo />
      <Router>
        <Container>
          <Header />
          <Row>
            <Col size='1'>
              <Navbar />
            </Col>
            <Col size='10'>
              <Route exact path='/' component={Trending} />
              <Route exact path='/home' component={Trending} />
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
