import React from 'react';
import './ImageItem.css';

const ImageItem = (props) => {
    let imageName = 'like.png';
    if (props.logo.likedOffer) {
        imageName = 'liked.png';
    }

    const likeClick = (e) => {
        e.preventDefault();
        let like = props.logo.likedOffer;
        props.likedOffer(props.index, !like);
    }

    return (
        <div className="LogoItem">
            <div onClick={()=>{props.offerSelect(props.index)}}>
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
            <img className="likeButton" 
                src={process.env.PUBLIC_URL + '/Others/' + imageName}
                onClick={(e) => likeClick(e)} />
        </div>
    )
}

export default ImageItem;