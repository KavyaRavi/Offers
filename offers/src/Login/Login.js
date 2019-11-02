import React from 'react';

const Login = (props) => {

    return (
        <div>
            <label>Username : </label>
            <input type="text" />
            <label>Password : </label>
            <input type="password" />
            <button onClick={props.click}>Login</button>
        </div>
    )

}

export default Login;