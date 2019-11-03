import React from 'react';
import data from './GetLogoDetails.json';
import ImageList from '../ImageList/ImageList';
import './Dashboard.css';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="Dashboard">
                <ImageList offerSelect={this.props.offerSelect} logos={data.logoList} />
            </div>
        )
    }
}

export default Dashboard;