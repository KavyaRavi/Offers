import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './LandingPage.css';
import data from '../Dashboard/GetLogoDetails.json';
import ViewAllOffers from '../ViewAllOffers/ViewAllOffers';
import OfferDetail from '../ViewAllOffers/OfferDetail';

class LandingPage extends React.Component {
    state = {
        viewAll: false,
        viewOffer: false,
        selectedOffer: {},
        offers: [],
        likedOffers: []
    }

    componentDidMount() {
        let offers = data.logoList;
        this.setState({
            offers
        })
    }

    setViewAllFlag = () => {
        let viewAll = this.state.viewAll;
        this.setState({
            viewAll: !viewAll
        });
    }

    offerSelect = (index) => {
        console.log(index);
        let selectedOffer = this.state.offers[index];
        let viewOffer = !this.state.viewOffer
        this.setState({
            selectedOffer,
            viewOffer
        })
    }

    setFlags = () => {
        this.setState({
            viewAll: false,
            viewOffer: false,
            selectedOffer: {}
        })
    }

    likedOffer = (index, status) => {
        let offersList = this.state.offers;
        offersList[index].likedOffer = status;
        let likedOffers = this.state.likedOffers;
        if (likedOffers.length > 0) {
            if (status) {
                let i = this.checkArray(likedOffers, offersList[index]);
                if (i == -1) 
                    likedOffers.push(offersList[index]);
            } else {
                let i = this.checkArray(likedOffers, offersList[index]);
                if (i !== -1)
                    likedOffers.splice(i, 1);
            }
        } else {
            likedOffers.push(offersList[index]);
        }
        console.log(likedOffers);
        this.setState({
            offers: offersList,
            likedOffers
        });
    }

    checkArray = (arr, selectedOffer) => {
        let ind = -1;
        for(let i = 0; i < arr.length; i++) {
            if (arr[i].offerId == selectedOffer.offerId)  {
                ind = i;
                break;
            }
            ind = -1;
        }
        return ind;
    }

    render() {
        let viewInit = null;
        let viewAllOffers = null;
        let offerDetail = null;

        if (!this.state.viewAll && !this.state.viewOffer) {
            viewInit = (
                <div>
                    <a href='#' onClick={this.setViewAllFlag}>View All</a>
                    <Dashboard likedOffer={this.likedOffer} offerSelect={this.offerSelect} offers={this.state.offers} />
                </div>
            )
        } else if(this.state.viewAll && !this.state.viewOffer) {
            viewAllOffers = (
                <div>
                    <ViewAllOffers click={this.setViewAllFlag} likedOffer={this.likedOffer} offerList={this.state.offers} offerSelect={this.offerSelect} />
                </div>
            )
        } else {
            offerDetail = (
                <div>
                    <OfferDetail offer={this.state.selectedOffer} click={this.setFlags} />
                </div>
            )
        }
        return (
            <div className="LandingPage">
                <div className="buttonDiv">
                    <h3>Exciting Offers!!!</h3>
                    <span>{this.state.likedOffers.length}</span>
                    <img src={process.env.PUBLIC_URL + '/Others/cart.png'} alt="Cart" className="cart" />
                    <img src={process.env.PUBLIC_URL + '/logout.png'} className="logout" onClick={this.props.click} alt="Logout" />
                </div>
                {viewInit}
                {viewAllOffers}
                {offerDetail}
            </div>
        )
    }
}

export default LandingPage;