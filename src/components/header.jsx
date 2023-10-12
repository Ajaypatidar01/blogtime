import { useContext, useState, useEffect } from 'react';
import Classes from '../styles/style.module.css';
import { Link } from 'react-router-dom';
import UserContext from '../store/userContext';

function Header() {
    const [showBar, setShowBar] = useState(null);
    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
    useEffect(() => {
        const user = localStorage.getItem('user');
        if(user){
        setIsLoggedIn(true);
        }
        },[]);
        const handleLogout = () => {
            setIsLoggedIn(false);
            localStorage.clear();
        }
    return (
        <nav className={Classes.nav}>
            <h1 style={{ color: 'lightgray' }}>BLOGTIME</h1>
            {!showBar && <svg onClick={() => setShowBar(!showBar)} className={Classes.burger} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>}
            {showBar && <svg onClick={() => setShowBar(!showBar)} className={Classes.burger} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>}
            <div style={showBar&&{display : 'none'}} className={Classes.menu}>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/add-blog'>Add New Blog</Link></li>
                </ul>
                {!isLoggedIn && <div>
                    <button><Link to='/sign-up'>Signup</Link></button>
                    <button><Link to='/log-in'>Login</Link></button>
                </div>}
                {isLoggedIn && <ul>
                    <li><Link to='/account'>Account</Link></li> 
                    <button onClick={handleLogout}>Logout</button>
                    </ul>}
            </div>
        </nav>
    );
}

export default Header;