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
        >
          Home
        </Link>
      </li>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/about'
        >
          About
        </Link>
      </li>

      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/profile'
        >
          My Profile
        </Link>
      </li>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/login'
        >
          LOG IN
        </Link>
      </li>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/sign-up'
        >
          SIGN UP
        </Link>
      </li>

    </nav>
  )
}

export default Navbar
