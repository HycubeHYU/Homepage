import React, { Component } from 'react';

class Notice extends Component {
    constructor(props){
        super(props)
        window.location.href = 'https://github.com/HycubeHYU';
    }
    render() {
        return (
            <div>
                <div className="title">
                &nbsp;Wiki로 이동중입니다...
                </div>
            </div>
        );
    }
}

export default Notice;