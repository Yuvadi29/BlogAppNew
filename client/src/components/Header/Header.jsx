import React from 'react';
import './Header.css';
import HeaderImg from './HeaderImg.jpg';

const Header = () => {
  return (
    <div className='Header'>
        <div className="Titles">
            <span className='TitleSmall'>React and Node</span>
            <span className='TitleLarge'>Blog</span>
        </div>
        <img className='HeaderImage' src={HeaderImg} alt="headerimage" />
    </div>
  )
};

export default Header;