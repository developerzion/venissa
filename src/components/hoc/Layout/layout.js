import React from "react";
import './layout.css'

import Sidebar from '../../Sidebar/sidebar';
import Header from "../../Header/header";
import Body from "../../Body/body";

const Layout =()=> {
    return(
        <div>
            <Sidebar/>
            <Header/>
            <Body/>
        </div>
    )
}

export default Layout