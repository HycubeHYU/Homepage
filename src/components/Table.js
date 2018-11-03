import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> 번호 </th>
                            <th> 제목 </th>
                            <th> 작성자 </th>
                            <th> 작성일 </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 번호 </td>
                            <td className="td-left"> 제목1 </td>
                            <td> 작성자 </td>
                            <td> 작성일 </td>
                        </tr>
                    </tbody>
                </table>
                <div className="nav-line"/> 
            </div>
        );
    }
}

export default Table;