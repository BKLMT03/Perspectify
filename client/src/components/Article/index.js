import React from 'react'
import {Link} from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import "./style.css"

const Article = ({query, title, description, url, image, date}) => {
  return (
    
    <div className='card m-3 shadow-sm' style={{width: "18rem"}}>
      <img src={image} className='card-img-top' alt="Article Image" />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>
          {date}
        </p>
        <button className='btn' type="onClick" href="/Discussion">
        <Link
          className='nav-link'
          // to='/Discussion'
          to={{
            pathname: "/Discussion",
            state: {query: query,
                    url: url}
          }}
          
        >
          Perspectify
        </Link>
        </button>
      </div>
    </div>
  )
}

export default Article
