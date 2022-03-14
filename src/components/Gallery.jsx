import React, { useState } from "react"

import tennisImage from "../images/TennisImage.JPG"
import tennisImage2 from "../images/TennisImage2.JPG"
import jeffrey from "../images/IMG-3669.jpg"

const images = [tennisImage, tennisImage2, jeffrey]

function Gallery(){

    const imageElements = images.map((image) => (
            <img src={image}/>
    )) 

    return <div className="galleryContainer">
                <div className="galleryTitle">
                    <h2 className="galleryTitle">Tennis</h2>
                </div>
                <div className="galleryImages">
                    {imageElements}
                </div>
            </div>
            
}

export default Gallery
