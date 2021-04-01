import React from 'react'
import Row from '../Row'
import './style.css'

function ProfileName ({data}) {
  var loggedOrNO = false;
    if (/*data.length*/1 > 0) {
        console.log('someone is logged in!')
        loggedOrNO = true;
    } else {
        console.log('no one is logged in')
    }
  return (
    <div className='userName'>
      <Row>
        <span className='name'>{/*loggedOrNO ? data[0].first_name + " " + data[0].last_name : ""*/}Joe Schmoe</span>
      </Row>
    </div>
  )
}

export default ProfileName