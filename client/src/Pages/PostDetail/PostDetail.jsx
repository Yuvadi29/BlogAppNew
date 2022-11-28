import React from 'react';
import Bar from '../../components/Bar/Bar';
import SinglePost from '../../components/SinglePost/SinglePost';
import './PostDetail.css';

const PostDetail = () => {
    return (
        <div className='PostDetail'>
            <SinglePost />
            <Bar />
        </div>
    )
}

export default PostDetail