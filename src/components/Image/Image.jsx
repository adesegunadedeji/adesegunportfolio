import React from 'react'
import Image from './photoPage.jpg'
import './Image.css'
function ImageComponent (){
    return(
        <div className="imagePage">
            <img  className="ImageComponent"  src={Image} alt = "ProfileImage"/>
        </div>
    )
}
export default ImageComponent