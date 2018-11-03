import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/Cleaner.css'



class Cleaner extends Component {
    render() {
        return (
            <div className="cleaner">
                {this.props.active>0?
                    <button className="cleaner-left" onClick={this.props.handle.bind(null,this.props.active>0?this.props.active-1:0)}>
                        <FontAwesomeIcon size="3x" icon="angle-left" />
                    </button>
                :
                    <div/>
                }
               
                {this.props.active<6?
                    <button className="cleaner-right" onClick={this.props.handle.bind(null,this.props.active<6?this.props.active+1:0)}>
                        <FontAwesomeIcon size="3x" icon="angle-right" />
                    </button>
                :
                    <div/>
                }
            </div>
        );
    }
}

export default Cleaner;