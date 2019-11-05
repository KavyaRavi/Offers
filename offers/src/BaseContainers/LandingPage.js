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
        offers: []
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
        console.log("inside dashboard", index, status);
        let offersList = this.state.offers;
        offersList[index].likedOffer = status;
        this.setState({
            offers: offersList
        });
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
                    <img src={process.env.PUBLIC_URL + '/logout.png'} onClick={this.props.click} alt="Logout" />
                </div>
                {viewInit}
                {viewAllOffers}
                {offerDetail}
            </div>
        )
    }
}

export default LandingPage;