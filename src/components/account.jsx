import { useContext, useEffect, useState } from "react";
import UserContext from "../store/userContext";
import Classes from '../styles/style.module.css';

function Account() {
    const { isLoggedIn } = useContext(UserContext);
    const [user, setUser] = useState({});
    useEffect(() => {
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
    }, []);
    return (
        <div className={Classes.account}>
            {isLoggedIn ? <table>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td>{user.username}</td>
                </tr>
            <h4>This data is read only</h4>
            </table> :
                <h2>Please Login First</h2>
            }
        </div>
    );
}

export default Account;