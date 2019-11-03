import React from 'react';
import FirstPage from '../BaseContainers/FirstPage';
import './App.css';
import LandingPage from '../BaseContainers/LandingPage';

class App extends React.Component {

    state = {
        login: false,
        username: '',
        password: ''
    }

    setUsername = (username) => {
        this.setState({
            username: username.target.value
        });
    }

    setPassword = (pwd) => {
        this.setState({
            password: pwd.target.value
        });
    }

    loginClickHandler = (e) => {
        let didLogin = this.state.login;
        if (this.state.username !== '' || this.state.password !== '') {
            this.setState({
                login: !didLogin
            })
        } else {
            e.preventDefault();
            alert("Please enter mandatory fields");
        }
    }

    logoutClickHandler = () => {
        let didLogout = this.state.login;
        this.setState({
            login: !didLogout
        });
    }

    render() {

        let login = null;
        let dashboard = null;

        if (!this.state.login) {
            login = (
                <div className="FirstPage">
                    <FirstPage 
                    click={this.loginClickHandler}
                    usernameChange={this.setUsername}
                    pwdChange={this.setPassword} />
                </div>
            );
        } else {
            dashboard = (
                <LandingPage click={this.logoutClickHandler} />
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