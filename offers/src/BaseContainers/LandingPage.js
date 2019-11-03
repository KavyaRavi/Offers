import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './LandingPage.css';
import data from '../Dashboard/GetLogoDetails.json';
import ViewAllOffers from '../ViewAllOffers/ViewAllOffers';

class LandingPage extends React.Component {
    state = {
        viewAll: false
    }

    setViewAllFlag = () => {
        console.log("inside")
        let viewAll = this.state.viewAll;
        this.setState({
            viewAll: !viewAll
        });
    }

    render() {
        let viewInit = null;
        let viewAllOffers = null;

        if (!this.state.viewAll) {
            viewInit = (
                <div>
                    <a href='#' onClick={this.setViewAllFlag}>View All</a>
                    <Dashboard />
                </div>
            )
        } else {
            viewAllOffers = (
                <div>
                    <ViewAllOffers click={this.setViewAllFlag} offerList={data.logoList} />
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
            </div>
        )
    }
}

export default LandingPage;