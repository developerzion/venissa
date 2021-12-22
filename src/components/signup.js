import React from "react";
import { Link } from "react-router-dom";

// import Header from "./header"

import user from '../images/user.png'
import password from '../images/lock.png'
import img from '../images/signup.svg';

const Signup =()=>{
    return(
        <div>
            <section className="section">
                {/* <Header/> */}

                <Link to="/"><span className="fa fa-chevron-left"></span></Link>
            

                <div className="container-login">           

                    <div className="login">

                        <div className="log-header">                    
                            <img className="radius" src={img} alt="signup"/>
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
                                <img src={password} alt="user" />
                                <input type="password" placeholder="Enter your password" required=""/>
                            </div>
                            <div className="login-field">
                                <img src={password} alt="password" />
                                <input type="password" placeholder="Confrim password" required="" />
                            </div>

                            <div className="forgot-password">
                                <p className="signUp center">Already have an account! Click &nbsp;<Link to="/login"> Sign In</Link></p>
                            </div>

                            <button className="custom-button-black center padTop">Sign In</button>


                        </form>
                    </div>
                </div>
            </section>

            
            
        </div>
    )
}

export default Signup