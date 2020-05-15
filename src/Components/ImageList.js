import React from 'react'
import Image from './Image'

function ImageList(props) {
    
    return (
       
        <div className="image-list">
        {props.images.map(image => <Image key= {image.id} url = {image.urls.regular} alt = {image.description}/>)}
        </div>
      
    )
}

export default ImageList
