import React, { Component } from 'react';
import NoticeTables from './NoticeTables'
import Paginations from './Paginations';

class Notice extends Component {
    render() {
        return (
            <div>
                <div className="title">
                &nbsp;Notice
                </div>
                <NoticeTables handle={this.props.handle} page={this.props.page}/>
                <Paginations  handle={this.props.handle} page={this.props.page}/>
            </div>
        );
    }
}

export default Notice;