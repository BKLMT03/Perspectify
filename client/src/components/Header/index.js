import React from 'react'
import Typed from 'react-typed'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './style.css'

function Header () {
  return (
    <div className='container text-center header mb-5'>
      <Row>
        <h3 className='subtitle mt-4 mb-5'>
          <Typed
            strings={['Earn Your Opinion.', 'Escape the echo chamber.' , 'Challenge your beliefs.', 'PERSPECTIFY yourself.']}
            startDelay={100}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </h3>
      </Row>
      <Row>
        <p>
           
        </p>
        <p>
          Easily find the latest news on trending topics from a variety of news sources
          and points of view all in one place.
        </p>
        <p>Sign up to discuss with other PERSPECTIFIED minds.</p>
      </Row>
    </div>
  )
}

export default Header
