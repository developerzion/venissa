import React from "react";
import { Routes, Route } from "react-router";


import Home from "./home"
import Login from "./login"

const App = () =>{
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="login"  element={<Login/>}></Route>
            </Routes>
        </div>
    )
}

export default App;

