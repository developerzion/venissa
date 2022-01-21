import React from "react";

import './sidebar.css'

import logo from './images/logo.png'

const Sidebar =()=>{        
    return(
        <aside className="sidebar" id="sidebar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="icons">
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-github"></i>
                <i className="fa fa-envelope"></i>
            </div>
        </aside>
    )
}

export default Sidebar