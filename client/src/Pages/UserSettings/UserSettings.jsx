import React from 'react';
import Bar from '../../components/Bar/Bar';
import './UserSettings.css';
import profile from './profile.jpg';
import { CgProfile } from 'react-icons/cg';


const UserSettings = () => {
    return (
        <div className='UserSettings'>
            <div className="wrapper">
                <div className="title">
                    <span className="updatetitle">
                        Update your Profile
                    </span>
                    <span className="deletetitle">
                        Delete your Profile
                    </span>
                </div>

                <form className="update">
                    <label>Profile Image</label>
                    <br />
                    <div className="profileimage">
                        <img src={profile} alt="profileimg" />
                        <label htmlFor="fileInput">
                            <CgProfile className='profileicon' />
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Aditya" />
                    <label>Email</label>
                    <input type="email" placeholder="letstalkaditya@gmail.com" />
                    <label>Password</label>
                    <input type="password" />

                    <button className="updatesetting">Update Changes</button>
                </form>

            </div>
            <Bar />
        </div>
    )
}

export default UserSettings;