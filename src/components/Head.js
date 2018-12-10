import React, { Component } from 'react';

class Head extends Component {
    render() {
        return (
            <div className="nav">
                <img className="logo" src="./img/logo.png" alt="하이큐브 로고" onClick={this.props.handle.bind(null,0)} />
                <strong className="head" onClick={this.props.handle.bind(null,0)}> HYCUBE </strong>
            </div>
        );
    }
}

export default Head;