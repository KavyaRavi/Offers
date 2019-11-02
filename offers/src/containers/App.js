import React from 'react';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';

class App extends React.Component {

    state = {
        login: false
    }

    loginClickHandler = () => {
        let didLogin = this.state.login;
        this.setState({
            login: !didLogin
        })
    }

    render() {

        let login = null;
        let dashboard = null;

        if (!this.state.login) {
            login = (
                <Login click={this.loginClickHandler} />
            );
        } else {
            dashboard = (
                <Dashboard />
            )
        }

        return (
            <div className='App'>
                {login}
                {dashboard}
            </div>
        )
    }

}

export default App;