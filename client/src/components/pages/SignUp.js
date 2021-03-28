import {useState, React} from 'react'
import axios from 'axios'
import './Login.css'

const SignUp = () => {
    const [nameFirst, setNameFirst] = useState('');
    const [nameLast, setNameLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const addUser = async () => {
        const config = {
            headers: {
              'Content-type': 'application/json'
            }
          }
        try {
            const res = await axios.post('api/v1/users', {
                first_name: nameFirst,
                last_name: nameLast,
                email: email,
                password: password
    
            }, config)
            console.log(res)
            
        } catch (error) {
            console.log(error)
            
        }

    }

    const handleFirstNameChange = (e, index) => {
        setNameFirst(e.target.value);
        
      }
    const handleLastNameChange = (e, index) => {
        setNameLast(e.target.value);
    }

    const handleEmailChange = (e, index) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e, index) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <div className="auth-wrapper">
                <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name"
                    onChange={(e) => handleFirstNameChange(e)} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                    onChange={(e) => handleLastNameChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    onChange={(e) => handleEmailChange(e)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                    onChange={(e) => handlePasswordChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block"
                onClick={addUser}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./login">sign in?</a>
                </p>
            </form>
            </div>
            </div>
            
        </div>
    )
}

export default SignUp
