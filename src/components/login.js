import React from "react";
import { Link } from "react-router-dom";

// import Header from "./header"

import user from '../images/user.png'
import password from '../images/lock.png'
import img from '../images/log.svg';

const Login =()=>{
    return(
        <div>
            <section className="section">
                {/* <Header/> */}

                <Link to="/"><span className="fa fa-chevron-left"></span></Link>
            

                <div className="container-login">           

                    <div className="login">

                        <div className="log-header">                    
                            <img src={img} alt="Log"/>
                        </div>

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
                                <p className="signUp center">Don’t have an account?&nbsp;<Link to=""> Sign Up</Link></p>
                                <Link to="">Forgot Password?</Link> 
                            </div>

                            <button className="custom-button center padTop">Sign In</button>


                        </form>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Login