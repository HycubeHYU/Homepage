import React, { Component } from 'react';
import NoticeTables from './NoticeTables'
import Paginations from './Paginations';
import NoticeMove from './NoticeMove';

import '../../css/Notice.css';

class Notice extends Component {
    render() {
        return (
            <div>
                <div className="title">
                &nbsp;Notice
                </div>
                <div className="notice-align">
                <NoticeTables handle={this.props.handle} page={this.props.page}/>
                <Paginations  handle={this.props.handle} page={this.props.page}/>
                </div>
                <NoticeMove onClick={this.props.handle.bind(null,6)}/>
            </div>
        );
    }
}

export default Notice;