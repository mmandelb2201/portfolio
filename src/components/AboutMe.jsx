import React from "react"

import Gallery from "./Gallery"

function AboutMe(){
    return <div className="centerContainer">
        <h2 className="containerTitle">About Me</h2>
        <p className="containerText">
            Hi! My name is Matt, I’m 20, and I’m currently a junior at Stevens Institute of Technology 
            studying software engineering. I’ve worked on many side projects during my time as a student.
             My favorite was an ios app that I had made on Xcode using swift and google firebase. It was 
             released on the app store for about a year, but I had to remove it as I found that I did not
             have time to moderate it anymore. This past summer one of my professors wanted me to help him
             with some research on robots. During this, I learned about how to use ROS to run the robots,
             python to communicate to the bots, and XML to create launch files for a simulation. Currently
            , I’m a software engineer intern at TeliApp. Here, I am currently developing an IOS and WatchOS
            app. I’m from Warren NJ and try to volunteer at soup kitchens whenever I can. I’m also a huge
            tennis fan, and I have several private students that I continue to teach. I enjoy spending a nice
             evening with friends. Is there anything else you would like to know about my life at the moment?
        </p>
    </div>
}

export default AboutMe