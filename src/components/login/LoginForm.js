import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class LoginForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleId = this.handleId.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

        this.state = {
            id: '',
            password: ''
        };
    }

    handleId(e) {
        this.setState({ id: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <form>
                <FormGroup>
                    <ControlLabel>Sign In To HYCUBE</ControlLabel>
                    <FormControl
                        className="login-form-input"
                        id="id"
                        type="text"
                        value={this.state.id}
                        placeholder="Id"
                        onChange={this.handleId}
                    />
                    <FormControl.Feedback />
                    <FormControl
                        className="login-form-input"
                        id="password"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handlePassword}
                    />
                    <FormControl.Feedback />
                    <Button className="login-form-signin">Sign In</Button>
                </FormGroup>
            </form>
        );
    }
}

export default LoginForm;