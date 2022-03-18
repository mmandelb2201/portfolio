import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "../style.css"

import Header from "./Header"
import Introduction from "./Introduction"
import Gallery from "./Gallery"
import AboutMe from "./AboutMe"
import Projects from "./Projects"

function App(){
    return <div>
    <Header />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<h1>contact</h1>} />
        </Routes>
    </BrowserRouter>
    </div>
}

export default App