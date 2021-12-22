import React from "react";
import { Routes, Route } from "react-router";


import Home from "./home"
import Login from "./login"
import Signup from "./signup"

const App = () =>{
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/login"  element={<Login/>}></Route>
                <Route path="/signup"  element={<Signup/>}></Route>
            </Routes>
        </div>
    )
}

export default App;

