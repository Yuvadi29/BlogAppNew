import React from 'react';
import './Login.css';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineUserAdd, AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="Login">
                <div className="container">
                    <div className="login">
                        <div className="container">
                            <h1>Login</h1>
                            <input type="text" placeholder='Username' />
                            <input type="password" placeholder='Password' />
                            <br />
                            <input type="checkbox" />
                            <a href="/ax">Forgot Password ?</a>
                            <button>Log in</button>
                            <hr />
                            <p>Or Connect With</p>
                            <hr />
                            <ul>
                                <li><BsFacebook className='fbicon' /></li>
                                <li><BsTwitter className='twittericon' /></li>
                                <li><BsGithub className='giticon' /></li>
                                <li><BsLinkedin className='linkedinicon' /></li>
                            </ul>
                            <div className="clearfix"></div>
                            <span className="copyright">&copy;Aditya Trivedi</span>
                        </div>
                    </div>
                    <div className="register">
                        <div className="container">
                            <AiOutlineUserAdd className='RegIcon' />
                            <h2>Hello,friend!</h2>
                            <p>Enter your personal details and start journey with us</p>
                            <Link to='/register'>
                                <button>Register <AiOutlineRight className='rightarrow' /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;