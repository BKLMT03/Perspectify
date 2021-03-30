import {React, useState} from 'react'
import axios from 'axios'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [activeUserData, setActiveUserData] = useState('');

    const validateLogin = async () => {
        const config = {
            headers: {
              'Content-type': 'application/json'
            }
          }
          const res = await axios.get("/api/v1/users", {
            params: { email: email, password: password},
          });
          if (res.status === 200 || 304) {
              console.log("logged in")
              setActiveUserData(res.data)
              clearInputs();
              window.location.replace('/')
          } else {
              console.log('something went wrong')
              clearInputs();
          }
          
    }

    const handleEmailChange = (e, index) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e, index) => {
        setPassword(e.target.value);
    }

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <div className="auth-wrapper">
                <div className="auth-inner">
            <form
            onSubmit={e => {
                e.preventDefault()
                validateLogin();
              }}>
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" required placeholder="Enter email"
                    onChange={(e) => handleEmailChange(e)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" required placeholder="Enter password"
                    onChange={(e) => handlePasswordChange(e)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block"
                >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Login
