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
            strings={['Earn Your Opinion.']}
            startDelay={100}
            typeSpeed={100}
          />
        </h3>
      </Row>
      <Row>
        <p>
          Escape the echo chamber. Challenge your beliefs. PERSPECTIFY yourself.
        </p>
        <p>
          Find the latest news on trending topics from a variety of news sources
          and points of view.
        </p>
        <p>Sign up to discuss with other PERSPECTIFIED minds.</p>
      </Row>
    </div>
  )
}

export default Header
