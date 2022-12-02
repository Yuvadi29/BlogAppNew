import React, { useContext } from 'react';
import './Navbar.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { Context } from '../../context/Context';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  return (
    <div className="navbar">

      <div className="navleft">
        <FaFacebook className='fbicon' />
        <GrTwitter className='twittericon' />
        <FaInstagram className='instaicon' />
      </div>

      <div className="navcenter">
        <ul className="Navcomp">
          <li className="NavcompItem">
            <Link className='link' to="/" >Home</Link>
          </li>
          <li className="NavcompItem">
            <Link className='link' to="/about" >About</Link>
          </li>
          <li className="NavcompItem">
            <Link className='link' to="/contact" >Contact</Link>
          </li>
          <li className="NavcompItem">
            <Link className='link' to="/create" >Create</Link>
          </li>
          <li className="NavcompItem">
            <Link className='link' to="/logout" onClick={handleLogout}>{user && "Logout"}</Link>
          </li>
        </ul>
      </div>

      <div className="navright">
        {user ? (
          <Link to="/usersetting">
            <img
              src={PF + user.ProfileImage}
              className='profileimage'
              alt="profileImage" />
          </Link>

        ) : (
          <>
            <ul className="Navcomp">
              <li className="NavcompItem">
                <Link className='link' to="/login" >Login</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link className='link' to="/register" >Register</Link>

              </li>
            </ul>
          </>
        )
        }

        <BsSearch className='searchicon' />
      </div>

    </div>
  )
}

export default Navbar;