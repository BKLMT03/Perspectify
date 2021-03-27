import React from 'react'
import Row from '../Row'
import './style.css'

function ProfileName () {
  return (
    <div className='userName'>
      <Row>
        <span className='name'>Jane Doe</span>
      </Row>
    </div>
  )
}

export default ProfileName