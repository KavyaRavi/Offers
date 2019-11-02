import React from 'react';
import data from './GetLogoDetails.json';
import ImageList from '../ImageList/ImageList';

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <ImageList logos={data.logoList} />
            </div>
        )
    }
}

export default Dashboard;