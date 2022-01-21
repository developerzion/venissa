/* ============================================
    Github: github.com/developerzion
    Linkedin: linkedin.com/in/developerzion
    Mail: devparse.official@gmail.com
    Author: Moses Samuel Zion
    Website: www.devparse.com 
============================================ */

import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Myroutes from './components/routes'

reactDom.render(
    <BrowserRouter>
        <Myroutes/>
    </BrowserRouter>,
    document.querySelector("#root")
)
