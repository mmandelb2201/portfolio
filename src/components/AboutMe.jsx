import React from "react"

import Gallery from "./Gallery"

function AboutMe(){

    document.addEventListener('scroll', function (e) {
        var top  = window.pageYOffset + window.innerHeight,
            isVisible = top > document.querySelector('#container-one').offsetTop;
      
         if (isVisible) {
           document.getElementById("container-one").classList.add('center-container-animate');
         }
      })

     
    return <div className="center-container" id="container-one">
                <div className="title-container">
                    <h2 className="medium-title">About Me</h2>
                </div>
                <div className="horizontal-content">
                    <div className="container-column">
                        <p className="container-text">
                            Hi! My name is Matt, I’m 20, and I’m currently a junior at Stevens Institute of Technology 
                            studying software engineering. I’ve worked on many side projects during my time as a student.
                            My favorite was an ios app that I had made on Xcode using swift and google firebase. It was 
                            released on the app store for about a year, but I had to remove it as I found that I did not
                            have time to moderate it anymore. This past summer one of my professors wanted me to help him
                            with some research on robots. 
                        </p>
                    </div>
                    <div className="container-column">
                        <Gallery imgOne={"TennisImage.JPG"} imgTwo={"TennisImage2.JPG"} imgThree={"suits.jpeg"} />
                    </div>
                </div>
        </div>
}

export default AboutMe