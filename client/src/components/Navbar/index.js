import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar () {
  return (
    <nav className='nav flex-columnn link-dark justify-content-center'>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/'
          style={{ color: 'darkslategray', textShadow: '1px 1px black' }}
        >
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='contact'
          style={{ color: 'darkslategray', textShadow: '1px 1px black' }}
        >
          Saved Articles
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/'
          style={{ color: 'darkslategray', textShadow: '1px 1px black' }}
        >
          LOG IN
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/'
          style={{ color: 'darkslategray', textShadow: '1px 1px black' }}
        >
          SIGN UP
        </Link>
      </li>

    </nav>
  )
}

export default Navbar
