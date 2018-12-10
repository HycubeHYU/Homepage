import React, { Component } from 'react';
import StudyTables from './StudyTables';

class Study extends Component {
    render() {
        return (
            <div>
                <div className="title">
                &nbsp;Study
                </div>
                <StudyTables handle={this.props.handle} page={this.props.page}/>
            </div>
        );
    }
}

export default Study;