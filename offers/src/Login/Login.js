import React from 'react';
import './Login.css';

const Login = (props) => {

    return (
        <div className="Login">
            <div className="col">
                <div className="block">
                    <div className="block-header">
                        <h4>Login</h4>
                    </div>
                    <div className='block-body'>
                        <form>
                            <div className='form-group'>
                                <label>Username : </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password : </label>
                                <input type="password" className="form-control" />
                            </div>
                            <button className="btn" onClick={props.click}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;