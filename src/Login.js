import React from 'react'
import { Link } from 'react-router-dom';

import './Login.css'

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON
                    CLONE conditions of Use and Sale.
                </p>
                <button className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
