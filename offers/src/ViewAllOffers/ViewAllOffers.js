import React from 'react';
import OfferItem from './OfferItem';
import './ViewAllOffers.css';

const ViewAllOffers = (props) => {
    let offers = props.offerList.map((offer, index) => {
        return <OfferItem offer={offer} key={index} offerSelect={props.offerSelect} index={index} />
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