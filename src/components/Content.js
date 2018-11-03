import React, { Component } from 'react';
import Iframe from './Iframe';

import '../css/Content.css'

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Iframe active={this.props.active}/>
                <br/>
            </div>
        );
    }
}

export default Content;