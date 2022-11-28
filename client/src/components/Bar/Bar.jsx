import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Bar.css';
import barimage from './barimage.jpg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';


const Bar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:5000/api/categories");
            setCats(res.data);
        }
        getCats(); 
    },[]);
    return (
        <div className='Bar'>
            <div className="Baritem">
                <span className="Bartitle">About</span>
                <img className='barimage' src={barimage} alt="barimg" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eos ab et voluptas repudiandae
                </p>
            </div>
            <div className="Baritem">
                <span className="Bartitle">Categories</span>
                <ul className="BarList">
                    {cats.map(c=>(
                        <li className="BarListItem">{c.name}</li>
                    ))}
                </ul>
            </div>
            <div className="Baritem">
                <span className="Bartitle">Follow</span>
                <div className="BarMedia">
                    <FaFacebook className='fbicon' />
                    <GrTwitter className='twittericon' />
                    <FaInstagram className='instaicon' />
                </div>
            </div>
        </div>
    );
}

export default Bar;