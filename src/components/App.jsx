import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "../style.css"

import Header from "./Header"
import Resume from "./Resume"
import Gallery from "./Gallery"

function App(){
    return <div>
    <Header />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<h1>projects</h1>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<h1>contact</h1>} />
        </Routes>
    </BrowserRouter>
    </div>
}

export default App