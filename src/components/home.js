import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png"
import banner from "../images/banner.jpg"

const Home =()=>{

    return (
        <div>
            <div className="header">
                
                {/* Div logo */}
                <span className="logo">
                    <Link to="/">
                        <img src={logo} alt="Productly logo" />
                        Toolstack
                    </Link>
                </span>
                {/* End div logo  */}

                {/* Div menu  */}
                <div className="navbar">
                    <Link to="">Home</Link>
                    <Link to="">Products</Link>
                    <Link to="">Customers</Link>
                    <Link to="">Pricing</Link>
                    <Link to="">Resources</Link>
                    <Link to="">Sign In</Link>
                    <Link to="">Sign Up</Link>                   

                </div>  

                <div className="mobilenav">
                    <span onClick={ (e)=>{ e.target.classList.toggle("fa-times"); document.querySelector(".navbar").classList.toggle("active")} } className="fa fa-bars"></span>
                    <span className="fa fa-user"></span>
                </div>  

                {/* End div menu  */}

            </div>

            <section id="banner" className="banner">

                <div className="container bd-grid">
                    <div className="container-left">
                        <h1>The Design Thinking superpowers</h1>
                        <h4>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</h4>
                        <div className="container-footer">
                            <Link to="" className="custom-button">Get Started</Link>
                            <Link to="" className="custom-text"> <i className="fa fa-play"></i> Watch the video</Link>
                        </div>
                    </div>
                    <div className="container-right">
                        <img src={banner} alt="Banenr" />
                    </div>
                </div>

            </section>

      
        </div>
    )
}

export default Home