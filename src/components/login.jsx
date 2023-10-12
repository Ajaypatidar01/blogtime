import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Classes from '../styles/style.module.css';
import UserContext from "../store/userContext";

function Login() {
  const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    username  : '',
    password  : ''
  });
  const handleChange = (e) => {
    setCred(prev => {return{...prev,[e.target.id] : e.target.value}})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cred);
  }

    return (
      <>
        { !isLoggedIn  && 
          <form className={Classes.form} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className={Classes.inputs}>
                <div>
                  <label htmlFor="username">Email</label>
                  <input value={cred.username} onChange={handleChange} type="text" id="username" required spellCheck='false'/>
                  
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input value={cred.password} onChange={handleChange} type="password" id="password" required spellCheck='false'/>
                  
                </div>
            </div>
                <button type="submit">Login</button>
                {!isLoggedIn && <p style={{color : 'red'}}>No Account Found! Please signup first</p>}
            <p>Didn't have an Account <span className={Classes.signup_link} onClick={() => navigate("/sign-up")}>Signup</span></p>
        </form>}
        </>
    );
}

export default Login;