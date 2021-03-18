import React from 'react'
import './style.css'

function Header () {
  return (
    <div className='container text-center header'>
      <h3 className='subtitle mt-5'>Earn Your Opinion</h3>

      <p>
        Escape the echo chamber. Challenge your beliefs. PERSPECTIFY yourself.
      </p>
      <p>
        Find the latest news on trending topics from a variety of news sources
        from around the world and across political spectra.
      </p>
      <p>Sign up and discuss topics with other PERSPECTIFIED minds.</p>

      <button> Login </button>
      <button> Sign Up</button>
    </div>
  )
}

export default Header
