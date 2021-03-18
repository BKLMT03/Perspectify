import React from 'react'
import Topic from '../Topic'
import Row from '../Row'
import "./style.css"

const Trending = () => {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <div>
      <h1 className="trending mb-3">Trending Topics</h1>
      <Row>
        <div>
          {arr.map(item => {
            return (
              <div className='topics'>
                <Topic />
              </div>
            )
          })}
        </div>
      </Row>

      <div class='container input-group my-5'>
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
