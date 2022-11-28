import React, { useEffect, useState } from 'react';
import Bar from '../../components/Bar/Bar';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import './Home.css';
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className='HomePage'>
        <Posts posts={posts} />
        <Bar />
      </div>
    </>
  )
}

export default Home;