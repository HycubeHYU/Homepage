import React, { Component } from "react";
import Main from "./components/home/Main";
import Head from './components/Head';
import Notice from './components/notice/Notice';
import NoticeWrite from './components/notice/NoticeWrite';
import Study from './components/study/Study';
import Wiki from './components/wiki/Wiki';
import More from './components/more/Menus';
import Login from './components/login/Login';

import Footer from './components/Footer';

import "./index.css";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faAngleLeft,faAngleRight,faCommentDots } from '@fortawesome/free-solid-svg-icons';

// library.add(faAngleLeft,faAngleRight,faCommentDots)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      page: 1
    };
    this.handleActive = this.handleActive.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  handleActive(what, event) {
    this.setState({
      active: what
    });
  }

  handlePage(what, event) {
    this.setState({
      page: what
    })
  }

  render() {
    return (
      <div className="App">
        <div className="blank" />
        <Head active={this.state.active} handle={this.handleActive} />
        <div id="page-wrap">
          {this.state.active === 0 ? <Main /> : ""}
          {this.state.active === 1 ? <Notice handle={this.handlePage} page={this.state.page} /> : ""}
          {this.state.active === 2 ? <Study /> : ""}
          {this.state.active === 3 ? <Wiki /> : ""}
          {this.state.active === 4 ? <More handle={this.handleActive} page={this.state.page} /> : ""}
          {this.state.active === 5 ? <Login /> : ""}
          {this.state.active === 6 ? <NoticeWrite /> : ""}
        </div>
        <Footer active={this.state.active} handle={this.handleActive} />
      </div>
    );
  }
}

export default App;
