import React, { Component } from 'react';

class Contents extends Component {
    render() {
        return (
            <tr>
                <td colSpan="2" id="content-text" className="content">
                    <div>{this.props.row.content}</div>
                </td>
            </tr>
        );
    }
}

export default Contents;