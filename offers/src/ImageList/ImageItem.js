import React from 'react';
import './ImageItem.css';

const ImageItem = (props) => {
    return (
        <div className="LogoItem" onClick={()=>{props.offerSelect(props.index)}}>
            <div>
                <img src={process.env.PUBLIC_URL + props.logo.logoImage} alt={props.logo.vendor} />
            </div>
            <div>
                <h5>{props.logo.offerFirstHeading}</h5>
                <h3>{props.logo.offerMainHeading}</h3>
                <h6>{props.logo.offerLastHeading}</h6>
                <p>{props.logo.offerTitle}</p>
            </div>
        </div>
    )
}

export default ImageItem;