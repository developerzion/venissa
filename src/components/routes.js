import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout/layout"
import Body from "./Body/body"

const Myroutes =()=> {
    return( 
        <Layout>   
            <Routes>            
                <Route path="/" element={<Body/>}></Route>
            </Routes>
        </Layout>               
    )
}

export default Myroutes