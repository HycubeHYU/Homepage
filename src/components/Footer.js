import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-menu" onClick={this.props.handle.bind(null,0)}>
                    <div className="footer-icon">
                        <img className="footer-logo" src="./img/logo.svg" alt="하이큐브 로고" />
                    </div>
                    <div className="footer-name">
                        <span> Home </span>
                    </div>
                </div>
                <div className="footer-menu" onClick={this.props.handle.bind(null,1)}>
                    <div className="footer-icon">
                        <img className="footer-logo" src="./img/notice.svg" alt="하이큐브 로고" />
                    </div>
                    <div className="footer-name">
                        <span> Notice </span>
                    </div>
                </div>
                <div className="footer-menu" onClick={this.props.handle.bind(null,2)}>
                    <div className="footer-icon">
                        <img className="footer-logo" src="./img/study.svg" alt="하이큐브 로고" />
                    </div>
                    <div className="footer-name">
                        <span> Study </span>
                    </div>
                </div>
                <div className="footer-menu" onClick={this.props.handle.bind(null,3)}>
                    <div className="footer-icon">
                        <img className="footer-logo" src="./img/wiki.svg" alt="하이큐브 로고" />
                    </div>
                    <div className="footer-name">
                        <span> Wiki </span>
                    </div>
                </div>
                <div className="footer-menu" onClick={this.props.handle.bind(null,4)}>
                    <div className="footer-icon">
                        <img className="footer-logo" src="./img/more.svg" alt="하이큐브 로고" />
                    </div>
                    <div className="footer-name">
                        <span> More </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;