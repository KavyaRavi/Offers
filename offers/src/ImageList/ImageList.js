import React from 'react';
import ImageItem from './ImageItem';
import data from '../Dashboard/GetLogoDetails.json';
import './ImageList.css';

const ImageList = (props) => {

    let logoList = data.logoList.map((logo, index) => {
        while (index < 6) { 
            return <ImageItem logo={logo} key={index} />
        }
    })

    return (
        <div className="ImageList">
            {logoList}
        </div>
    )

}

export default ImageList;