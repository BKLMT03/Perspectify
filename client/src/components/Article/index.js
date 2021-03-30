import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import "./style.css"
import newsApiKeys from '../../config/apikeys'
import axios from 'axios'

const Article = ({trending, query, title, description, url, image, date, source}) => {
  // const superLeft = ['Salon', 'Daily Beast', 'Black Lives Matter', 'Slate','Think Progress'];
  // //pink
  // const midLeft = ['CNN', 'New Yorker', 'BBC', 'Politico', 'CBS', 'Washington Post', 'The Guardian', 'Huffington Post'];
  // //yello
  // const center = ['Reuters', 'Al Jazeera', 'Time', 'Economist', 'Bloomberg', 'Associated Press', 'Los Angeles Times', 'ABC News', 'NPR', 'CSPAN'];
  // //green
  // const midRight = ['The Hill', 'Russia Today', 'Fox News', 'New York Post', 'Epoch Times', 'Daily Mail'];
  // //orange
  // const superRight = ['The Blaze', 'OANN', 'News Max', 'Daily Caller', 'Breitbart News', 'Drudge Report'];
  // //purple
  let style = {width: "18rem",
              border: "3px solid grey",
              };

  const spectrum = {
    data: 
    {
    tech: ['CNET', 'Engadget', 'TechCrunch'],
    sports: ['ESPN', 'Bleacher Report'],
    superLeft: ['Salon', 'Daily Beast', 'Black Lives Matter', 'Slate','Think Progress'],
    midLeft: ['CNN', 'New Yorker', 'BBC News', 'Politico', 'CBS', 'The Washington Post', 'The Guardian', 'Huffington Post', 'New York Times', 'NBC News'],
    center: ['Reuters', 'Al Jazeera', 'Time', 'Economist', 'Bloomberg', 'Associated Press', 'Los Angeles Times', 'ABC News', 'NPR', 'CSPAN', 'CNBC'],
    midRight: ['The Hill', 'Russia Today', 'Fox News', 'New York Post', 'Epoch Times', 'Daily Mail'],
    superRight: ['The Blaze', 'OANN', 'News Max', 'Daily Caller', 'Breitbart News', 'Drudge Report']
    }
    
  }
  //reformat to this with switch statement, much cleaner
  var x = spectrum.data.center.includes(source);

  for (let i = 0; i < spectrum.data.tech.length; i++) {
    if (spectrum.data.tech[i] === source) {
      style.border = '3px solid turquoise'
    }
  }
  for (let i = 0; i < spectrum.data.sports.length; i++) {
    if (spectrum.data.sports[i] === source) {
      style.border = '3px solid red'
    }
  }
  for (let i = 0; i < spectrum.data.superLeft.length; i++) {
    if (spectrum.data.superLeft[i] === source) {
      style.border = '3px solid pink'
    }
  }

  for (let i = 0; i < spectrum.data.midLeft.length; i++) {
    if (spectrum.data.midLeft[i] === source) {
      style.border  = '3px solid yellow'
    }
  }
  for (let i = 0; i < spectrum.data.center.length; i++) {
    if (spectrum.data.center[i] === source) {
      style.border  = '3px solid green'
    }
  }
  for (let i = 0; i < spectrum.data.midRight.length; i++) {
    if (spectrum.data.midRight[i] === source) {
      style.border  = '3px solid orange'
    }
  }
  for (let i = 0; i < spectrum.data.superRight.length; i++) {
    if (spectrum.data.superRight[i] === source) {
      style.border  = '3px solid purple'
    }
  }
  

  return (
    <button className='btn' type="onClick" href="/Discussion">
        <Link
          className='nav-link'
          // to='/Discussion'
          to={{
            pathname: "/Discussion",
            state: {query: query,
                    url: url,
                    trending: trending,
                    source: source}
          }}>
            
        <div className='card m-3 shadow-sm' style={style}>
        <img src={image} className='card-img-top' alt="Article Image" />
        <div className='card-body' >
        <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            {date}
          </p>
        
        </div>
        </div>
        </Link>
        </button>
    
  )
}

export default Article
