import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class NoticeWriteForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: '',
            body: ''
        };
    }

    handleSubmit() {
        fetch("https://18.216.159.54/board", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                "author_ID": "SOS",
                "title":this.state.title,
                "content": this.state.body
            })
        }).catch(err => console.log(err));
    }

    handleTitle(e) {
        this.setState({ title: e.target.value });
    }

    handleBody(e) {
        this.setState({ body: e.target.value });
    }

    render() {
        return (
            <form>
                <FormGroup>
                    <ControlLabel>공지 쓰기</ControlLabel>
                    <FormControl
                        className="notice-form-input"
                        id="title"
                        type="text"
                        value={this.state.title}
                        placeholder="title"
                        onChange={this.handleTitle}
                    />
                    <FormControl.Feedback />
                    <FormControl
                        className="notice-form-input"
                        id="body"
                        type="text"
                        value={this.state.body}
                        placeholder="body"
                        onChange={this.handleBody}
                    />
                    <FormControl.Feedback />
                    <Button className="login-form-signin" onClick={this.handleSubmit}>제출하기</Button>
                </FormGroup>
            </form>
        );
    }
}

export default NoticeWriteForm;