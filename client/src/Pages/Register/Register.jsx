import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                username,
                email,
                password,
            });
            // console.log(res);
            res.data && window.location.replace('/login'); //If data is valid then redirect to login page

        } catch (error) {
            console.log(error);
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
                                            <input type="text" className="form-control" placeholder="Username" onChange={handleUsername} />
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
                                            <label for="Email">Email</label>
                                            <input type="Email" className="form-control" placeholder="Email" onChange={handleEmail} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="Password">Password</label>
                                            <input type="Password" className="form-control" placeholder="Password" onChange={handlePassword} />
                                        </div>
                                    </div>
                                    {/* <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="mboileNo">Mobile No</label>
                                            <input type="number" className="form-control" id="mobileNo" placeholder="Mobile No" onChange={(e) => setMobileNo(e.target.mobileNo)} />
                                        </div>
                                    </div> */}
                                    <div className="form-group">
                                        <small><Link to="/login" className="form-text text-muted">I have an account!</Link></small>
                                    </div>
                                    {error && <span style={{ color: "red" }}>User Exists</span>}
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

export default Register;
