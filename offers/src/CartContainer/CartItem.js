import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    return (
        <div className="row CartItem">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <img src={process.env.PUBLIC_URL + props.likedOffer.logoImage} />
            </div>
            <div className="col-lg-8 col-md-6 col-md-12 content">
                <div>
                    <h3>{props.likedOffer.offerFirstHeading + " " + props.likedOffer.offerMainHeading + " " + props.likedOffer.offerLastHeading}</h3>
                    <p>{props.likedOffer.offerTitle}</p>
                </div>
            </div>
            <p className="terms">* T&amp;C Apply</p>
            <img className="share-icon" src={process.env.PUBLIC_URL + '/Others/share.svg'} />
        </div>
    )
}

export default CartItem;