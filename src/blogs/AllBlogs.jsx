import { useContext, useEffect, useState } from 'react';
import Classes from '../styles/style.module.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../store/userContext';

function AllBlogs() {
    const [posts, setPosts] = useState([]);
    const [hasData, setHasData] = useState(true);
    const [myPosts, setMyPosts]  = useState([]);
    const navigate = useNavigate();
    const {isLoggedIn} = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPosts(); 
        const myPostsData =  localStorage.getItem('myBlogs');
        console.log(JSON.parse(myPostsData));
        setMyPosts(JSON.parse(myPostsData));
    }, [isLoggedIn]);
    const getPosts = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://dummyjson.com/posts');
            const data = await res.json();
            setPosts(data.posts);
            setHasData(true);
            setLoading(false);
        }
        catch (error) {
            setHasData(false);
            setLoading(false);
        }
    }
    return ( 
        <>
        {loading && <div className={Classes.loader}></div>}
        <main className={Classes.main}>
             {myPosts !== null && myPosts.map(item =>  <div onClick={() => {navigate(`/blog/${item.id}`)}}  className={Classes.post_box} key={item.id}>
                <h2 style={{textAlign : 'center'}}>{item.title.substr()}</h2>
                <div>
                    <p className={Classes}>{item.body.slice(0,70)}... <span style={{color : 'blue'}}>Read More</span></p>
                </div>
            </div>)}
            { posts.map(item =>  <div onClick={() => {navigate(`/blog/${item.id}`)}}  className={Classes.post_box} key={item.id}>
                <h2 style={{textAlign : 'center'}}>{item.title.substr()}</h2>
                <div>
                    <p className={Classes}>{item.body.slice(0,70)}... <span style={{color : 'blue'}}>Read More</span></p>
                </div>
            </div>)}
            
            {!loading && !hasData && <h1>No Posts to display</h1>}
        </main>
        </>
    );
}

export default AllBlogs;