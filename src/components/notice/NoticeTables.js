import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";
import Contents from "../Contents";

import "../../css/Table.css";

class NoticeTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: 0,
      notice: [],
      target: 0,
      write: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  componentDidMount() {
    fetch("http://18.216.159.54/notice/list/1")
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          notice: json
        });
      })
      .catch(err => console.log(err));
  }

  componentWillReceiveProps(next) {
    if (this.state.page !== next.page) {
      this.handlePage(next.page);
    }
  }

  handlePage(page) {
    fetch("http://18.216.159.54/notice/list/" + page)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          notice: json
        });
      })
      .catch(err => console.log(err));
  }

  handleClick(what, event) {
    this.setState({
      target: what
    });
  }

  render() {
    let { notice } = this.state;
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th className="notice-title">Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {notice.map(row => (
              <BoardItem
                handleClick={this.handleClick}
                target={this.state.target}
                key={row.id}
                row={row}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default NoticeTables;

class BoardItem extends React.Component {
  render() {
    return (
      <Fragment>
        <tr onClick={this.props.handleClick.bind(null, this.props.row.id)}>
          <td
            className={
              this.props.target === this.props.row.id
                ? "notice-title-active"
                : "notice-title"
            }
          >
            {this.props.row.title}
          </td>
          <td
            className={
              this.props.target === this.props.row.id
                ? "notice-author-active"
                : "notice-author"
            }
          >
            {this.props.row.author_ID}
          </td>
        </tr>
        {this.props.target === this.props.row.id ? (
          <Contents row={this.props.row} />
        ) : (
          <Fragment />
        )}
      </Fragment>
    );
  }
}
