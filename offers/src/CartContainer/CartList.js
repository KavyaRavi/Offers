import React from 'react';
import CartItem from './CartItem';
import './CartList.css';

class CartList extends React.Component {

    render() {
        let cartItems = this.props.likedOffers.map((likedOffer, index) => {
            return <CartItem key={index} likedOffer={likedOffer} />
        })

        return (
            <div className="CartList">
                {cartItems}
            </div>
        )

    }
}

export default CartList;