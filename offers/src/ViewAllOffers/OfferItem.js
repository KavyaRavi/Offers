import React from 'react';
import './OfferItem.css';

const OfferItem = ({offer, offerSelect, index, likedOffer}) => {

    let likeImage = 'like.png';
    if (offer.likedOffer) {
        likeImage = 'liked.png';
    }
    
    return (
        <div className="row OfferItem" onClick={() => {offerSelect(index)}}>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={process.env.PUBLIC_URL + offer.logoImage} />
                </div>
                <div className="col-lg-8 col-md-6 col-md-12 content">
                    <div>
                        <h3>{offer.offerFirstHeading + " " + offer.offerMainHeading + " " + offer.offerLastHeading}</h3>
                        <p>{offer.offerTitle}</p>
                    </div>
                </div>
                <p className="terms">* T&amp;C Apply</p>
        </div>
    )
}

export default OfferItem;