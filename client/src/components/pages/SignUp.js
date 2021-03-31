import {useState, React} from 'react'
import axios from 'axios'
import './Login.css'

const SignUp = () => {
    const [nameFirst, setNameFirst] = useState('');
    const [nameLast, setNameLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState('');

    const addUser = async () => {

        const config = {
            headers: {
              'Content-type': 'application/json'
            }
          }
        try {
            const res = await axios.post('api/v1/users', {
                first_name: nameFirst.toLowerCase(),
                last_name: nameLast.toLowerCase(),
                email: email.toLowerCase(),
                password: password
    
            }, config)
            if(res.data.message === "Email is already registered") {
                setEmailErr("already exists");
                setSignUpSuccess("")
            } else {
                setEmailErr("");
                clearInputs();
                setSignUpSuccess("Done!")
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }

    const clearInputs = () => {
        setNameFirst('');
        setNameLast('');
        setEmail('');
        setPassword('');
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
        <div data-testid="SignUpPage">
            <div className="auth-wrapper">
                <div className={signUpSuccess === "Done!" ? "auth-inner signUp" : "auth-inner"}>
            <form
            onSubmit={e => {
                e.preventDefault()
              }}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name"
                    onChange={(e) => handleFirstNameChange(e)}
                    value={nameFirst} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                    onChange={(e) => handleLastNameChange(e)}
                    value={nameLast}/>
                </div>

                <div className={"form-group"}>
                    <label className={emailErr === "already exists" ? 'error' : 'normal'}>
                    {"Email Address" + " " + emailErr}</label>
                    <input type="email" className={"form-control"} placeholder="Enter email"
                    onChange={(e) => handleEmailChange(e)}
                    value={email} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                    onChange={(e) => handlePasswordChange(e)}
                    value={password} />
                </div>

                <button type="submit" className={"btn btn-primary btn-block"}
                onClick={addUser}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./login">Sign in</a>
                </p>
            </form>
            </div>
            </div>
            
        </div>
    )
}

export default SignUp
