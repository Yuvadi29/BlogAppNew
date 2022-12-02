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
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateNote, setUpdateNote] = useState("");
    //Fetch single post from database
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
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

    //Update Function
    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
                username: user.username,
                title,
                description,
            });
            window.location.reload();
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

                {updateNote ? <input type="text" value={title} className="postTitleedit" autoFocus onChange={(e) => setTitle(e.target.value)} /> : (

                    < h1 className="postTitle">
                        {post.title}
                        {post.username === user?.username && (

                            <div className="edit">
                                <BiEdit className="editicon" onClick={() => setUpdateNote(true)} />
                                <FaTrash className="deleteicon" onClick={handleDelete} />
                            </div>
                        )}
                    </h1>
                )}

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
                {updateNote ? <textarea className='postdescedit' value={description} onChange={(e) => setDescription(e.target.value)} /> : (

                    <p className="postdesc">{post.description}</p>
                )}
                {updateNote && (
                    <button className="UpdateBtn" onClick={handleUpdate}>Update</button>
                )}

            </div>
        </div >
    );
}

export default SinglePost;