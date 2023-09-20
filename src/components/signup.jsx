import { useContext, useState } from "react";
import Classes from '../styles/style.module.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../store/userContext';

function Login() {
  const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();  
  const [cred, setCred] = useState({
    name : '',
    email : '',
    username  : '',
    password  : ''
  });
  const handleChange = (e) => {
    setCred(prev => {return{...prev,[e.target.id] : e.target.value}})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user',JSON.stringify(cred));
    setIsLoggedIn(true);
    navigate("/");
  }
    return (
        <> { !isLoggedIn &&
            <form className={Classes.form} onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <div className={Classes.inputs}>
            <div>
                  <label htmlFor="name">Name</label>
                  <input value={cred.name} onChange={handleChange} type="text" id="name" required spellCheck='false'/>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input value={cred.email} onChange={handleChange} type="email" id="email" required spellCheck='false'/>
                </div>
                <div>
                  <label htmlFor="username">Username</label>
                  <input value={cred.username} onChange={handleChange} type="text" id="username" required spellCheck='false'/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input value={cred.password} onChange={handleChange} type="text" id="password" required spellCheck='false'/>
                </div>
            </div>
                <button type="submit">Signup</button>
        </form>}
        </>
    );
}

export default Login;