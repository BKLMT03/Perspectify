import React from 'react'
import Topic from './Topic'

const Trending = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            <div>
            {arr.map((item ) => {
                return <Topic />
            })}
            </div>

            <form>
                <input type="text" placeholder="search for a news topic" name="search"></input>
                <button type="submit" > Search </button>
            </form>
        </div>
    )
}

export default Trending
