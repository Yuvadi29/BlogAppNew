import React, { useContext, useState } from 'react';
import Bar from '../../components/Bar/Bar';
import './UserSettings.css';
import { CgProfile } from 'react-icons/cg';
import { Context } from '../../context/Context';
import axios from 'axios';


const UserSettings = () => {

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updateUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.ProfileImage = filename;
            try {
                await axios.post("http://localhost:5000/api/upload", data);
            } catch (error) {

            }
        }
        try {
            const res = await axios.post("http://localhost:5000/api/users/" + user._id, updateUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (error) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    return (
        <div className='UserSettings'>
            <div className="wrapper">
                <div className="title">
                    <span className="updatetitle">
                        Update your Profile
                    </span>
                </div>

                <form className="update" onSubmit={handleSubmit}>
                    <label>Profile Image</label>
                    <br />
                    <div className="profileimage">
                        <img
                            src={file ? URL.createObjectURL(file) : PF + user.ProfileImage}
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <CgProfile className='profileicon' />
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />

                    <button className="updatesetting" type='submit' >Update Changes</button>
                    {success && (
                        <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
                            Profile Has Been Updated!!
                        </span>
                    )}
                </form>

            </div>
            <Bar />
        </div>
    )
}

export default UserSettings;