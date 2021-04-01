import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import axios from "axios"

const Navbar = () => {
  const [activeUserData, setActiveUserData] = useState();
  const getUserData = async () => {
    try {
        const res = await axios.get("/api/v1/users", {
            params: { query: "" },
        });
        console.log(res.data)
        setActiveUserData(res.data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(async () => {
    await getUserData();
    
    }, [])

  return (
    <nav className='nav flex-columnn justify-content-center'>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to={{
            pathname: "/",
            state: {data: activeUserData}
          }}
        >
          Home
        </Link>
      </li>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/about'
        >
          About
        </Link>
      </li>

      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to={{
            pathname: "/profile",
            state: {data: activeUserData}
          }}
        >
          My Profile
        </Link>
      </li>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/login'
        >
          LOG IN
        </Link>
      </li>
      <li className='nav-item mb-2'>
        <Link
          className='nav-link'
          to='/sign-up'
        >
          SIGN UP
        </Link>
      </li>

    </nav>
  )
}

export default Navbar
