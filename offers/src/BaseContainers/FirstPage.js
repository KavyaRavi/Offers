import React from 'react';
import Login from '../Login/Login';

class FirstPage extends React.Component {
    
    render() {
        return (
            <Login
            click={this.props.click}
            usernameChange={this.props.usernameChange}
            pwdChange={this.props.pwdChange} />
        )
    }
}

export default FirstPage;