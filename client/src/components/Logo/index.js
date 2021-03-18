import React from 'react'
import Row from '../Row'
import './style.css'

function Logo () {
  return (
    <div className='my-5'>
      <Row>
        <h1 className='logo'>
          Perspect<span className='i'>i</span>
          <span className='f'>f</span>
          <span className='y'>y</span>
          <span className='period'>.</span>
        </h1>
      </Row>
    </div>
  )
}

export default Logo
