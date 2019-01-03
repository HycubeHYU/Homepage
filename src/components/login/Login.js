import React, { Component } from 'react';
import LoginForm from './LoginForm';

import '../../css/Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login" id="login">
                <div className="login-img">
                    <img src="./img/logo_dark.png" alt="하이큐브 로고" />
                </div>
                <div className="login-form">
                    <LoginForm/>
                    {/* <input type="text" placeholder="ID"/>
                    <input type="password" placeholder="PASSWORD"/>
                    <div className="login-form-signup" value="Sign In"/> */}
                </div>
            </div>
        );
    }
}

export default Login;