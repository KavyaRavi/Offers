import React from 'react';
import data from './GetLogoDetails.json';
import ImageList from '../ImageList/ImageList';
import './Dashboard.css';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="Dashboard">
                <ImageList logos={data.logoList} />
            </div>
        )
    }
}

export default Dashboard;