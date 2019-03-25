import React, { Component } from 'react';

import '../../css/Menus.css'

class Menus extends Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
      <div>
        <div className="menu-item" onClick={this.props.handle.bind(null,0)}>메인</div>
        <div id="notice" className="menu-item" onClick={this.props.handle.bind(null,1)}>공지사항</div>
        <div id="study" className="menu-item" onClick={this.props.handle.bind(null,2)}>스터디</div>
        <div id="wiki" className="menu-item" onClick={this.props.handle.bind(null,3)}>위키</div>
        <div id="contact" className="menu-item" onClick={this.props.handle.bind(null,5)}>로그인</div>
        <div className="menu-item" onClick={this.props.handle.bind(null,6)}>글쓰기</div>
      </div>
    );
  }
}

export default Menus;
