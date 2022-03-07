import React from "react"

import tennisImage from "../images/TennisImage.JPG"
import tennisImage2 from "../images/TennisImage2.JPG"

function Gallery(){
    return <div className="galleryContainer">
                <div className="galleryTitle">
                    <h2 className="galleryTitle">Tennis</h2>
                </div>
                <div className="gallery">
                    <img src={tennisImage} alt="Tennis Image One"/>
                </div>

                <div className="gallery">
                    <img src={tennisImage2} alt="Tennis Image Two"/>
                </div>
    </div>
}

export default Gallery