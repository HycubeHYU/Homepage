import React, { Component } from 'react';
import NoticeWriteForm from './NoticeWriteForm';

class NoticeWrite extends Component {
    render() {
        return (
            <div>
                <div className="title">
                &nbsp; Write - Notice
                </div>
                <div className="notice-form">
                    <NoticeWriteForm/>
                </div>
            </div>
        );
    }
}

export default NoticeWrite;