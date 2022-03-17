import React, { useState } from "react"

function Gallery(props){

    const images = [require("../images/"+props.imgOne), require("../images/"+props.imgTwo), require("../images/"+props.imgThree)]

    const [activeKey, setBigActive] = useState(images[0].toString())

    const imageElements = images.map((image) => (
        <div className={activeKey === image.toString() ? "active" : "inactive"} onClick={() => setActive(image)}  key={image.toString()}>
            <img src={image} />
        </div>
    )) 
      
    const setActive = (image) => {
        setBigActive(image.toString())
    }

    return <div className="full-gallery">
                <div className="gallery-container">
                    <div className="gallery-images">
                        {imageElements}
                    </div>
                </div>
            </div>
}

export default Gallery
