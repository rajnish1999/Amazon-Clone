import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import './Login.css';
import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const authObj = await auth.signInWithEmailAndPassword(email, password);
            if(authObj){
                history.push('/')
            }
        } catch(err) {
            alert(err.message)
        }
    }

    const register = async (e) => {
        e.preventDefault();
        try {
            const authObj = await auth.createUserWithEmailAndPassword(email, password);
            if(authObj){
                history.push('/')
            }
        } catch(err) {
            alert(err.message)
        }
        
    }

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
                    <input type="text" value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="Submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON
                    CLONE conditions of Use and Sale.
                </p>
                <button 
                className="login__registerButton"
                onClick={register}
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
