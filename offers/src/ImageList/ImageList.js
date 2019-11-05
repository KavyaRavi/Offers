import React from 'react';
import ImageItem from './ImageItem';
import './ImageList.css';

const ImageList = (props) => {

    let logoList = props.logos.map((logo, index) => {
        while (index < 6) { 
            return <ImageItem likedOffer={props.likedOffer} logo={logo} key={index} index={index} offerSelect={props.offerSelect} />
        }
    })

    return (
        <div className="ImageList">
            {logoList}
        </div>
    )

}

export default ImageList;