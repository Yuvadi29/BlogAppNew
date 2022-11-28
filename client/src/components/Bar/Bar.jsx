import React from 'react';
import './Bar.css';
import barimage from './barimage.jpg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';


const Bar = () => {
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
                    <li className="BarListItem">Life</li>
                    <li className="BarListItem">Animals</li>
                    <li className="BarListItem">Music</li>
                    <li className="BarListItem">Style</li>
                    <li className="BarListItem">Tech</li>
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