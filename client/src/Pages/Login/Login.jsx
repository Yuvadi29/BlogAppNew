import React, { useContext, useRef } from 'react';
import './Login.css';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineUserAdd, AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';


const Login = () => {

    const userRef = useRef();
    const passwordRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    console.log(user);

    return (
        <>
            <div className="Login">
                <div className="container">
                    <div className="login">
                        <div className="container">
                            <form onSubmit={handleSubmit}>

                                <h1>Login</h1>
                                <input type="text" placeholder='Username' ref={userRef} />
                                <input type="password" placeholder='Password' ref={passwordRef} />
                                <br />
                                <input type="checkbox" />
                                <a href="/ax">Forgot Password ?</a>
                                <button type='submit' disabled={isFetching}>Log in</button>
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
                            </form>
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