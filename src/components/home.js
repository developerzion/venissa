import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png"
import banner from "../images/banner.jpg"
import professional from "../images/professional.png"
import product from "../images/product.png"
import marketers from "../images/marketers.png"
// import one from "../images/1.png"
// import two from "../images/2.png"
// import three from "../images/3.png"
// import four from "../images/4.png"
// import five from "../images/5.png"


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
                        <img className="banner-image" src={banner} alt="Banenr" />
                    </div>
                </div>                

            </section>


            <section id="grad" className="pad">
                <div className="tools">
                    <h1>We design tools to unveil <br/> your superpowers</h1>
                </div>
                
                <div className="tool-box">
                    <div className="box">
                        <center><div className="color default"> <span className="fa fa-compass"></span></div></center>
                        <span className="title">First click tests</span>
                        <p className="text">While most people enjoy casino gambling</p>
                    </div>
                    <div className="box">
                        <center><div className="color default"> <span className="fa fa-location-arrow"></span></div></center>
                        <span className="title">Design surveys</span>
                        <p className="text">Sports betting, lottery and bingo playing for the fun</p>
                    </div>
                    <div className="box">
                        <center><div className="color default"> <span className="fa fa-pen-alt"></span></div></center>
                        <span className="title">Preference tests</span>
                        <p className="text">The Myspace page defines the individual.</p>
                    </div>
                    <div className="box">
                        <center><div className="color default"> <span className="fa fa-clock"></span></div></center>
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
                        <img className="trimimage" src={professional} alt="Professional" />
                    </div>
                </div>                

            </section>

            <section id="product" className="pad">

                <div className="container bd-grid ">                    
                    <div className="container-right">
                        <img className="trimimage" src={product} alt="Professional" />
                    </div>
                    <div className="container-left">
                        <p>Easier decision making for</p>
                        <h1>Product Managers</h1>
                        <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
                        <div className="check-box">
                            <div className="check"><span className="fa fa-check"></span></div>
                            <p>Never worry about overpaying for your energy again. </p>
                        </div>
                        <div className="check-box">
                            <div className="check"><span className="fa fa-check"></span></div>
                            <p>We will only switch you to energy companies that we trust and will treat you right. </p>
                        </div>
                        <div className="check-box">
                            <div className="check"><span className="fa fa-check"></span></div>
                            <p>We track the markets daily and know where the savings are. </p>
                        </div>
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
                        <img className="trimimage" src={marketers} alt="Professional" />
                    </div>
                </div>                

            </section>
            <div className="gradient-top"></div>

            <section id="hero" className="pad">
                {/* <img className="five" src={five} alt="five"/>
                <img className="four" src={four} alt="four"/> */}
                
                <div className="hero-container">
                    <h1>Need a super hero?</h1>
                    <p>Do you require some help for your project: Conception workshop, <br/>prototyping, marketing strategy, landing page, Ux/UI?</p>
                    <div className="expert">
                        <center><Link to="" className="custom-button separate">Contact our expert</Link></center>
                    </div>
                </div>      

                {/* <img src={three} alt="three"/>
                <img src={two} alt="two"/>
                <img src={one} alt="onw"/>           */}

            </section>

      
        </div>
    )
}

export default Home