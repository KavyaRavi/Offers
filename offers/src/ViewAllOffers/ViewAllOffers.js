import React from 'react';
import OfferItem from './OfferItem';
import './ViewAllOffers.css';

const ViewAllOffers = (props) => {
    let offers = props.offerList.map((offer, index) => {

        let imageName = 'like.png';
        if (offer.likedOffer) {
            imageName="liked.png";
        }

        const likeOffer = (e) => {
            e.preventDefault();
            let likeStatus = offer.likedOffer;
            props.likedOffer(index, !likeStatus);
        }

        return (
            <div className="ContainerDiv">
                <img onClick={(e) => {likeOffer(e)}} className="likeButton" key={index + 1} src={process.env.PUBLIC_URL + '/Others/' + imageName} />
                <OfferItem offer={offer} key={index} offerSelect={props.offerSelect} index={index} />
            </div>
        )
    });

    return (
        <div className="ViewAllOffers">
            <div className="backButton">
                <img src={process.env.PUBLIC_URL + '/back-button.png'} onClick={props.click} />
            </div>
            <div className="OfferList">
                {offers}
            </div>
        </div>
    )
}

export default ViewAllOffers;