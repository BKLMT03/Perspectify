import React from 'react'
import './style.css'

function Header () {
  return (
    <div className='container text-center header mb-5'>
      <h3 className='subtitle my-3'>Earn Your Opinion</h3>

      <p>
        Escape the echo chamber. Challenge your beliefs. PERSPECTIFY yourself.
      </p>
      <p>
        Find the latest news on trending topics from a variety of news sources
        and various points of view.
      </p>
      <p>Sign up to discuss with other PERSPECTIFIED minds.</p>

      <button type="button" className="btn btn-light btn-lg mx-5"> Sign Up </button>
      <button type="button" className="btn btn-light btn-lg mx-5"> Login </button>
    </div>
  )
}

export default Header
