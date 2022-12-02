import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/";

    return (
        <div className='Post'>
            {post.photo && <img className="Postimg" src={PF + post.photo} alt="" />}

            <div className="PostDetails">
                <div className="PostCategories">
                    {post.categories.map((c) => (
                        <span className="PostCategory">{c.name}</span>
                    ))}
                </div>

                {/* Link post to that id */}
                <Link to={`/post/${post._id}`} className="link">
                    <span className="PostTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="PostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="PostDescription">
                {post.description}
            </p>
        </div>
    );
}

export default Post;