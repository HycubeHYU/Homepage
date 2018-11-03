import React, { Component } from 'react';
import Chapter from './Chapter';
import Article from  './Article';

import '../css/Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="book-nav">
                <div className="book-name">
                    <img src="/" alt="하이큐브 마크" height="80px" width="250px"/>
                </div>
                <div className="nav-line"/> 

                <Chapter active={this.props.active} level={0} index="공지사항" handle={this.props.handle}/>
                <Chapter active={this.props.active} level={1} index="건의사항" handle={this.props.handle}/>
                <Chapter active={this.props.active} level={2} index="위키" handle={this.props.handle}/>
                <Chapter active={this.props.active} level={3} index="행사및스터디참여" handle={this.props.handle}/>
                <Chapter active={this.props.active} level={4} index="책대여" handle={this.props.handle}/>
                <Chapter active={this.props.active} level={5} index="소개" handle={this.props.handle}/>
                <Chapter active={this.props.active} level={6} index="가입" handle={this.props.handle}/>

                <div className="nav-line"/> 
            </div>
        )
    }
}

export default Nav;