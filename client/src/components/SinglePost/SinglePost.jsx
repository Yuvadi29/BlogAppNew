import React from 'react';
import './SinglePost.css';
// import Post from './post.jpg';
import { BiEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SinglePost = () => {
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    const [post, setPost] = useState({});
    //Fetch single post from database
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data);
        }
        getPost();
    }, [path]);
    return (
        <div className='SinglePost'>
            <div className="wrapper">
                {post.photo && (
                    <img src={post.photo} alt="" className="postimage" />
                )
                }

                <h1 className="postTitle">
                    {post.title}
                    <div className="edit">
                        <BiEdit className="editicon" />
                        <FaTrash className="deleteicon" />
                    </div>
                </h1>

                <div className="postInfo">
                    <span>Author: <b className="postAuthor">{post.username}</b></span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                    <br />
                </div>
                <p className="postdesc">{post.description}
                </p>

            </div>
        </div>
    );
}

export default SinglePost;