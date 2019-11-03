import React from 'react';
import './Login.css';

const Login = (props) => {

    return (
        <div className="row Login">
            <div className="col-md-9 col-lg-6 col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Login</h4>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Username<span className="required">*</span></label>
                                <input 
                                type="email" 
                                className="form-control"
                                onBlur={(e) => {props.usernameChange(e)}} />
                            </div>
                            <div className="form-group">
                                <label>Password<span className="required">*</span></label>
                                <input 
                                type="password" 
                                className="form-control"
                                onBlur={(e) => {props.pwdChange(e)}} />
                            </div>
                            <button className="btn btn-primary" onClick={(e) => {props.click(e)}}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;