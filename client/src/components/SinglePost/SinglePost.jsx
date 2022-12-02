import React, { useContext, useEffect, useState, } from 'react';
import './SinglePost.css';
import { BiEdit } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';

const SinglePost = () => {
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
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


    //Delete Function
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (error) {

        }
    };

    return (
        <div className='SinglePost'>
            <div className="wrapper">
                {
                    post.photo && (
                        <img src={PF + post.photo} alt="" className="postimage" />
                    )
                }

                < h1 className="postTitle">
                    {post.title}
                    {post.username === user?.username} && (

                    <div className="edit">
                        <BiEdit className="editicon" />
                        <FaTrash className="deleteicon" onClick={handleDelete} />
                    </div>
                    )
                </h1>

                <div className="postInfo">
                    <span>Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                            {/* <b className="postAuthor">{post.username}</b> */}
                        </Link>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                    <br />
                </div>
                <p className="postdesc">{post.description}
                </p>

            </div>
        </div >
    );
}

export default SinglePost;