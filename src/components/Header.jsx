import React from "react"

function Header(){
    return <div className="header">
        <a href="/" className="logo">CompanyLogo</a>
        <div className="header-right">
            <a className={Cutter(window.location.href.slice(2)) === "/" ? "active" : null} href="/">Home</a>
            <a className={Cutter(window.location.href.slice(2)) === "/resume" ? "active" : null} href="/resume">Resume</a>
            <a className={Cutter(window.location.href.slice(2)) === "/projects" ? "active" : null} href="/projects">Projects</a>
            <a className={Cutter(window.location.href.slice(2)) === "/contact" ? "active" : null} href="/contact">Contect Me</a>
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