import React, { useEffect, useState } from 'react';
import Bar from '../../components/Bar/Bar';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import './Home.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

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