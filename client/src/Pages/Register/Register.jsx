import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                username,
                email,
                password,
                mobileNo,
            });
            console.log(res);
            res.data && window.location.replace('/login');

        } catch (error) {
            // console.log(error);
            setError(true);
        }
    };


    return (
        <div className="Register">
            <div className="container h-100vh">
                <div className="row row h-100 align-items-center justify-content-centerr">
                    <div className="col align-self-cente ">
                        <div className="card">
                            <div className="card-header text-center display-4">
                                Register
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label for="userName">Username</label>
                                            <input type="text" className="form-control" id="userName" placeholder="UserName" onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                        {/* <div className="form-group col-md-4">
                                            <label for="middleName">Middle Name</label>
                                            <input type="text" className="form-control" id="middleName" placeholder="Middle Name" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="Surname">Surname</label>
                                            <input type="text" className="form-control" id="Surname" placeholder="Surname" />
                                        </div> */}
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4">Password</label>
                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.password)} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="phonenumber">Phone Number</label>
                                            <input type="text" className="form-control" id="phonenumber" placeholder="Phone Number" onChange={(e) => setMobileNo(e.target.mobileNo)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <small><Link to="/login" className="form-text text-muted">I have an account!</Link></small>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register