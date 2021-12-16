/* ============================================
    Github: github.com/developerzion
    Linkedin: linkedin.com/in/developerzion
    Mail: devparse.official@gmail.com
    Author: Moses Samuel Zion
    Website: www.devparse.com 
============================================ */

import React from "react";
import reactdom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app"

reactdom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector("#root")
)