import React from "react";
import { Link } from "react-router-dom";
import './body.css'

import banner from './images/banner.png'


const Body =()=>{
    return (
        <div>
            {/* <div className="circle"></div> */}

            <div className="mainBody">
                <div className="bodyContainer">
                    <div className="boxText">
                        <h5>Hi There,</h5>
                        <h1>I am Ven<span>i</span>ssa</h1>
                        <h2>I am a designer during daytime</h2>
                        <h3>& work with batman during nights.</h3>
                        <Link to="/">Ask Me How</Link>

                        <div className="contact">
                            <div className="box">
                                <h3>Email</h3>
                                <p>devparse.official@gmail.com</p>
                            </div>
                            <div className="box">
                                <h3>Phone</h3>
                                <p>+234 703-619-5368</p>
                            </div>
                            <div className="box">
                                <h3>Location</h3>
                                <p>Lagos state, Nigeria.</p>
                            </div>
                        </div>
                    </div>
                    <div className="boxImage">
                        <img src={banner} alt="banner" />
                    </div>
                </div>
                
            </div>
        </div>
        
    )
} 

export default Body