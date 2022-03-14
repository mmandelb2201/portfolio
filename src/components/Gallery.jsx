import React, { useState } from "react"

import tennisImage from "../images/TennisImage.JPG"
import tennisImage2 from "../images/TennisImage2.JPG"
import jeffrey from "../images/IMG-3669.jpg"

const images = [tennisImage, tennisImage2, jeffrey]

function Gallery(){

    const [bigImage, setBigImage] = useState('')

    const imageElements = images.map((image) => (
            <img className={bigImage === image ? "active" : "inactive"} src={image} onClick={() => showImage(image)}/>
    )) 
      
    const showImage = (image) => {
        setBigImage(image)
    }



    return <div className="fullGallery">
            <div className="galleryContainer">
                <div className="galleryImages">
                    {imageElements}
                </div>
            </div>
            
            </div>
}

export default Gallery
