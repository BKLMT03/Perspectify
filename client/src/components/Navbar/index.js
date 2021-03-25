import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar () {
  return (
    <nav className='nav flex-columnn justify-content-center'>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/'
          style={{ color: 'black', textShadow: '0 0 3px black' }}
        >
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='contact'
          style={{ color: 'black', textShadow: '0 0 3px black' }}
        >
          Saved Articles
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/'
          style={{ color: 'black', textShadow: '0 0 3px black' }}
        >
          LOG IN
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/'
          style={{ color: 'black', textShadow: '0 0 3px black' }}
        >
          SIGN UP
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/Discussion'
          style={{ color: 'black', textShadow: '0 0 3px black' }}
        >
          Discussion
        </Link>
      </li>
      

    </nav>
  )
}

export default Navbar
