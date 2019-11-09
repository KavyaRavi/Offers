import React from 'react';
import './CartItem.css';

const CartItem = (props) => {

    const shareIconClick = (e) => {
        e.preventDefault();
        e.persist();
        var copyText = document.getElementById('cpyText');
        copyText.select();
        document.execCommand('copy');
        alert("Link copied to clipboard");
    }

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
                <div className="shareContentDiv">
                    <input className='form-control' type='text' value="some link here" id="cpyText" />
                    <button className="btn btn-secondary copyLink fa fa-share" onClick={(e) => {shareIconClick(e)}}></button>
                </div>
            </div>
            <p className="terms">* T&amp;C Apply</p>
        </div>
    )
}

export default CartItem;