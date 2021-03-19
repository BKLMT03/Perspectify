import { gray } from 'colors'
import React from 'react'
import Article from "../Article"
// import Topic from '../Topic'
import Row from '../Row'
import "./style.css"

const Trending = (props) => {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <div className="container-fluid border shadow">
      <h1 className="trending pt-3">Trending Topics</h1>
      <Row>
        <div>
          {arr.map(item => {
            return (
              <div className='topics'>
                <Article />
              </div>
            )
          })}
        </div>
      </Row>

      <div class='container input-group pb-3 my-5'>
        <input
          type='text'
          class='form-control'
          placeholder='Search for a topic'
          aria-label='Search for a topic'
          aria-describedby='button-addon2'
        />
        <button
          class='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Trending
