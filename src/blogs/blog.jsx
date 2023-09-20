import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Classes from '../styles/style.module.css';

function Blog() {
    const [post, setPost] = useState([]);
    const [hasData, setHasData] = useState(true);
    const {id} = useParams();
    useEffect(() => {
     fetchData();
    },[])
    const fetchData = async() => {
        try {
            const res = await fetch('https://dummyjson.com/posts');
            const data = await res.json();
            console.log(data);
            const filtered = data.posts.filter(item => item.id === Number(id));
            setPost(filtered[0]);
            setHasData(true);
        }
        catch (error) {
            setHasData(false);
        }
    }
    return(
        <div className={Classes.post}> 
            <h1>{post.title}</h1>
            <p>{post.body}</p>
      </div>
    );
}

export default Blog;