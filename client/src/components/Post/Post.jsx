import React from 'react';
import './Post.css';
import Postimg from './post.jpg';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <div className='Post'>
            {post.photo && (
                <img className='Postimg' src={Postimg} alt="pimg" />
            )}

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