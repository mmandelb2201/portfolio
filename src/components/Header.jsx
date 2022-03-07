import React from "react"

import gitHubLogo from "../images/GitHubLogo.png"

function Header(){
    return <div className="header">
        <a href="/" className="logo">Matthew Mandelbaum</a>
        <a className="image" href="https://github.com/mmandelb2201">
            <img  className="socialLink" src={gitHubLogo} />
        </a>
        <div className="header-right">
            <a className={Cutter(window.location.href.slice(2)) === "/" ? "active" : "inactive"} href="/">Home</a>
            <a className={Cutter(window.location.href.slice(2)) === "/resume" ? "active" : "inactive"} href="/resume">Resume</a>
            <a className={Cutter(window.location.href.slice(2)) === "/projects" ? "active" : "inactive"} href="/projects">Projects</a>
            <a className={Cutter(window.location.href.slice(2)) === "/gallery" ? "active" : "inactive"} href="/gallery">Gallery</a>
            <a className={Cutter(window.location.href.slice(2)) === "/contact" ? "active" : "inactive"} href="/contact">Contect Me</a>
        </div>
  </div>
}

function Cutter(url){
    if(url.length > 1 && url.slice(0,2) === "//"){
        return Cutter(url.slice(2))
    }
    else if (url[0] === "/" || url === ""){
        console.log(url)
        return url
    }else{
        return Cutter(url.slice(1))
    }
}

export default Header