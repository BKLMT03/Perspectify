import React from 'react'
import {Link} from 'react-router-dom'
import "./style.css"

const Article = () => {
  return (
    <div className='card m-3 shadow-sm' style={{width: "15rem"}}>
      <img src='...' className='card-img-top' alt='...' style={{width: "150px", height: "150px"}} />
      <div className='card-body'>
        <h5 className='card-title'>Article Title</h5>
        <p className='card-text'>
          Some Sample Text
        </p>
        <button className='btn btn-light' type="onClick" href="/Discussion">
        <Link
          className='nav-link'
          to='/Discussion'
          
        >
          Discussion
        </Link>
        </button>
      </div>
    </div>
  )
}

export default Article
