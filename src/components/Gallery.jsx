import React from "react"

import tennisImage from "../images/TennisImage.JPG"
import tennisImage2 from "../images/TennisImage2.JPG"

function Gallery(){
    return <div className="galleryContainer">
                <div className="galleryTitle">
                    <h2 className="galleryTitle">Tennis</h2>
                </div>
                <div className="galleryImages">
                    <div className="gallery">
                        <img src={tennisImage} alt="Description One"/>
                    </div>

                    <div className="gallery">
                        <img src={tennisImage2} alt="Description Two"/>
                    </div>
                </div>
    </div>
}

export default Gallery