import React from 'react'
import Row from '../Row'
import './style.css'

function ProfileName () {
  return (
    <div className='userName'>
      <Row>
        <h1 className='name'>Jane Doe</h1> 
      </Row>
    </div>
  )
}

export default ProfileName