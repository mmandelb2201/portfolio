import React, { useState } from "react"

import tennisImage from "../images/TennisImage.JPG"
import tennisImage2 from "../images/TennisImage2.JPG"
import jeffrey from "../images/IMG-3669.jpg"

const images = [tennisImage, tennisImage2, jeffrey]

function Gallery(){

    const [imageToShow, setImageToShow] = useState('')

    const imageElements = images.map((image) => (
        <div className="gallery" >
            <img className={imageToShow === image ? "active" : "inactive"} src={image} onClick={() => showImage(image)}/>
        </div>
    )) 

    const showImage = (image) => {
        setImageToShow(image)
    }

    return <div className="fullGallery">
            <div className="galleryContainer">
                <div className="galleryTitle">
                    <h2 className="galleryTitle">Tennis</h2>
                </div>
                <div className="galleryImages">
                    {imageElements}
                </div>
            </div>
            
            </div>
}

export default Gallery
