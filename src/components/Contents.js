import React, { Component } from 'react';

class Contents extends Component {
    render() {
        return (
            <tr>
                <td colSpan="2" className="content">
                    {this.props.row.content}
                </td>
            </tr>
        );
    }
}

export default Contents;