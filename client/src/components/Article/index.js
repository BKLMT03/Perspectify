import React from 'react'
import "./style.css"

const Article = ({title, description, url, image, date}) => {
  return (
    <div className='card m-3 shadow-sm' style={{width: "15rem"}}>
      <img src={image} className='card-img-top' alt='...' style={{width: "150px", height: "150px"}} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>
          {date}
        </p>
        <a href={url}>
        <button className='btn btn-light'>
          Go Deeper
        </button>
        </a>
        
      </div>
    </div>
  )
}

export default Article
