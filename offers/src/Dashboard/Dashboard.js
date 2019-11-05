import React from 'react';
import ImageList from '../ImageList/ImageList';
import './Dashboard.css';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="Dashboard">
                <ImageList likedOffer={this.props.likedOffer} offerSelect={this.props.offerSelect} logos={this.props.offers} />
            </div>
        )
    }
}

export default Dashboard;