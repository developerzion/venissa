import React from "react";
import { Link } from "react-router-dom";

import Header from "./header"

import user from '../images/user.png'
import password from '../images/lock.png'

const Login =()=>{
    return(
        <div>
            <Header/>
            <div className="container-login">

                <div className="login">
                    <div className="login-text">
                        <h1>Welcome Back</h1>
                        <h3>Login to your existing account</h3>
                    </div>

                    <form className="login-form">

                        <div className="login-field">
                            <img src={user} alt="user" />
                            <input type="text" placeholder="Enter your username" required=""/>
                        </div>
                        <div className="login-field">
                            <img src={password} alt="password" />
                            <input type="password" placeholder="Password" required="" />
                        </div>

                        <div className="forgot-password">
                            <Link to="">Forgot Password?</Link> 
                        </div>

                        <button className="custom-button center padTop">Sign In</button>

                        <p className="signUp center">Don’t have an account?&nbsp;<Link to=""> Sign Up</Link></p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login