import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Classes from '../styles/style.module.css';

function Blog() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasData, setHasData] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        setLoading(true);
     id < 2000 ? fetchData() : fetchLocalData();
    },[])
    const fetchLocalData = () => {
     const myPosts = JSON.parse(localStorage.getItem('myBlogs'));
     const filterdP = myPosts.filter((item) => item.id === Number(id));
     setPost(filterdP[0]);
     setHasData(true);
     setLoading(false);
    }
    const fetchData = async() => {
        try {
            const res = await fetch('https://dummyjson.com/posts');
            const data = await res.json();
            const filtered = data.posts.filter(item => item.id === Number(id));
            setPost(filtered[0]);
            setHasData(true);
            setLoading(false);
        } 
        catch (error) {
            setHasData(false);
            setLoading(false);
        }
    }
    console.log('this',post);
    return(
        <div className={Classes.post}>
            {loading && <div className={Classes.loader}></div>} 
            <h1>{post.title}</h1>
            <p>{post.body}</p>
      </div>
    );
}

export default Blog;