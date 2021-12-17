import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png"

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

      
        </div>
    )
}

export default Home