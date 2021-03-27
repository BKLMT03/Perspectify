import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar () {
  return (
    <nav className='nav flex-columnn justify-content-center'>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/'
          style={{ color: 'black', textShadow: '0 0 3px black' }}

        >
          Home
        </Link>
      </li>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/profile'
          style={{ color: 'black', textShadow: '0 0 3px black' }}
        >
          My Profile
        </Link>
      </li>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/login'
          style={{ color: 'black', textShadow: '0 0 3px black' }}
        >
          LOG IN
        </Link>
      </li>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/sign-up'
          style={{ color: 'black', textShadow: '0 0 3px black' }}
        >
          SIGN UP
        </Link>
      </li>

    </nav>
  )
}

export default Navbar
