import React from "react";
import { Routes, Route } from "react-router";


import Home from "./home"

const App = () =>{
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
            </Routes>
        </div>
    )
}

export default App;

