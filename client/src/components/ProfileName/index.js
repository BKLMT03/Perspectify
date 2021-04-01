import React from 'react'
import Row from '../Row'
import './style.css'

function ProfileName ({data}) {
  
  return (
    <div className='userName'>
      <Row>
        <span className='name'>{data ? data.first_name + " " + data.last_name : "loading"}</span>
      </Row>
    </div>
  )
}

export default ProfileName