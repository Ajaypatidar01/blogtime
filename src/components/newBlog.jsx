import { useContext, useEffect, useState } from "react";
import UserContext from '../store/userContext';
import { useNavigate } from 'react-router-dom';
import Classes from '../styles/style.module.css';

const initialValue ={
    id : '',
    title : '',
    body : ''
  };
function AddNewBlog() {
    const {isLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();
    const [newBlog, setNewBlog] = useState(initialValue);
    const [myBlogs, setMyBlogs] = useState([]);
    const [conditionMet, setConditionMet] = useState(false);
    const handleChange = (e) => {   
     setNewBlog(prev => {return {...prev,[e.target.id] : e.target.value}})
    }
    useEffect(() => {
        setMyBlogs(prev => {return [...prev,newBlog]});
    },[newBlog])
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewBlog(initialValue);
        localStorage.setItem('myBlogs', JSON.stringify(myBlogs));
    }
    console.log(myBlogs);
    return(
        <div className={Classes.addblog}>
              <h2>Add A New Blog</h2>
               {!isLoggedIn && <>
                  <p style={{color : 'red'}}>No Account Found! Please signup first</p>
                  <p>Didn't have an Account <span className={Classes.signup_link} onClick={() => navigate("/sign-up")}>Signup</span></p>
                </>  }
                {isLoggedIn && <div>
                  <form onSubmit={handleSubmit} className={Classes.form}>
                    <input onChange={handleChange} style={{textTransform :'capitalize'}} value={newBlog.title} type="text" id="title" placeholder="Title" required/>
                    <p style={{margin : 0, fontWeight : 600, color : 'gray'}}>Min 10 word - max 150 word</p>
                    <textarea onChange={handleChange} value={newBlog.desc} id="desc" placeholder="Start writing" spellCheck='false' required></textarea>
                    <p style={{margin : 0, fontWeight : 600, color : 'gray'}}>Min 100 word - max 500 word</p>
                    <button  type="submit">Publish</button>
                    {conditionMet && <p>You can publish Now</p>}
                  </form>

                </div>}
        </div>
    );
}

export default AddNewBlog;