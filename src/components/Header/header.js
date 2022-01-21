import React from "react";
import { Link } from "react-router-dom";

import './header.css'

import bars from './images/bars.png'


const Header =()=>{
    return (
        <div className="header" id="header">
            <div className="headerContainer">
                <div className="navbar">
                    <Link to="/">Portfolio</Link>
                    <Link className="active" to="/">About Me</Link>
                    <Link to="/">My Blog</Link>
                    <Link to="/">Reviews</Link>
                    <Link to="/">Contact Me</Link>
                </div>

                <div className="call">
                    <a href="https://api.whatsapp.com/send/?phone=2347036195368&text=Hello+Sam&app_absent=0"  target="_blank" rel="noreferrer"><span className="fa fa-phone"></span> Schedule a Call</a>
                    <img src={bars} alt="bars" />
                </div>
            </div>            
        </div>
    )
}

export default Header