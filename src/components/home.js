import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png"
import banner from "../images/banner.jpg"
import professional from "../images/professional.png"
import product from "../images/product.png"
import marketers from "../images/marketers.png"


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

            <section id="banner" className="pad">

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


            <section id="grad" className="pad">
                <div className="tools">
                    <h1>We design tools to unveil <br/> your superpowers</h1>
                </div>
                
                <div className="tool-box">
                    <div className="box">
                        <center><div className="color purple"> <span className="fa fa-compass"></span></div></center>
                        <span className="title">First click tests</span>
                        <p className="text">While most people enjoy casino gambling</p>
                    </div>
                    <div className="box">
                        <center><div className="color orange"> <span className="fa fa-location-arrow"></span></div></center>
                        <span className="title">Design surveys</span>
                        <p className="text">Sports betting, lottery and bingo playing for the fun</p>
                    </div>
                    <div className="box">
                        <center><div className="color red"> <span className="fa fa-pen-alt"></span></div></center>
                        <span className="title">Preference tests</span>
                        <p className="text">The Myspace page defines the individual.</p>
                    </div>
                    <div className="box">
                        <center><div className="color blue"> <span className="fa fa-clock"></span></div></center>
                        <span className="title">Five second tests</span>
                        <p className="text">Personal choices and the overall personality of the person. </p>
                    </div>

                </div>
                <div className="signupnow">
                    <center><Link to="" className="custom-button">SIGN UP NOW</Link></center>
                </div>
            </section>
            <div className="gradient"></div>

            <section id="prof" className="pad">

                <div className="container bd-grid">
                    <div className="container-left myorder">
                        <p>Effortless Validation for</p>
                        <h1>Design Professionals</h1>
                        <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                        <h3>Accessory makers</h3>
                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h3>Alterationists</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                        <h3>Custom Design designers</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                    </div>
                    <div className="container-right">
                        <img className="professional" src={professional} alt="Professional" />
                    </div>
                </div>                

            </section>

            <section id="banner" className="pad">

                <div className="container bd-grid ">                    
                    <div className="container-right">
                        <img className="professional" src={product} alt="Professional" />
                    </div>
                    <div className="container-left">
                        <p>Effortless Validation for</p>
                        <h1>Design Professionals</h1>
                        <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                        <h3>Accessory makers</h3>
                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h3>Alterationists</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                        <h3>Custom Design designers</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                    </div>
                </div>                

            </section>

            <section id="marketers" className="pad">

                <div className="container bd-grid">
                    <div className="container-left myorder">
                        <p>Effortless Validation for</p>
                        <h1>Design Professionals</h1>
                        <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                        <h3>Accessory makers</h3>
                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h3>Alterationists</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                        <h3>Custom Design designers</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                    </div>
                    <div className="container-right">
                        <img className="professional" src={marketers} alt="Professional" />
                    </div>
                </div>                

            </section>

      
        </div>
    )
}

export default Home