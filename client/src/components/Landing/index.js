import React from 'react'
import { Link } from 'react-router-dom'
import Particles from "react-particles-js"

const Landing = () => {
    return (
        <div>
            <Particles
                className="particles-canvas" 
                params={{
                particles: {
                    number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                    },
                    shape: {
                    type: "circle",
                    stroke: {
                        width: 6,
                        color: "#f9ab00",
                    }
                    }
                }
                }}
            />
            <h2>Perspecity</h2>
            <Link
          className='nav-link'
          to='/home'
          style={{ color: 'black', textShadow: '0 0 3px black' }}

        ><button>Enter</button></Link>
            
        </div>
    )
}

export default Landing
