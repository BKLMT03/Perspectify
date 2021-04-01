import {React, useState, useContext, useEffect, useMemo} from 'react'
import axios from 'axios'
import './Login.css'
import {GlobalContext} from '../../context/GlobalState'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[user, setUser] = useState(null)
    const [loginStatus, setLoginStatus] = useState(false);

    const context = useContext(GlobalContext)

    const validateLogin = async () => {
        // window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        const config = {
            headers: {
              'Content-type': 'application/json'
            }
          }
          const res = await axios.post("/api/v1/auth", 
            { email: email, password: password},
          );
          if (res.status === 200 || 304) {
              console.log("logged in")
              setLoginStatus(true);
              localStorage.setItem("token", res.data.user.token)
              clearInputs();
              
          } else {
              console.log('something went wrong')
              clearInputs();
          }
          userAuthenticated();
          
    }

    const userAuthenticated = async () => {
        const res = await axios.get('/api/v1/auth', {
            headers: {
                'x-auth-token' : localStorage.getItem("token")
            }
        }).then((response) => {
            console.log(response)
            context.user.user = response.data
        })
        
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
    useEffect(async () => {
        
      }, []);

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

                <button type="submit" className="btn btn-block"
                href=""
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
