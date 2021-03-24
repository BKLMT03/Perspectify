import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Logo from './components/Logo'
import Container from './components/Container'
import Col from './components/Col'
import Navbar from './components/Navbar'
import Row from './components/Row'
import ArticleDiscussionPage from './components/pages/ArticleDiscussionPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"

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
