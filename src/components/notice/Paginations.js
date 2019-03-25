import React, { Component,Fragment } from "react";
import { Pagination } from "react-bootstrap";

import "../../css/Pagination.css";

class Paginations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: []
    };
  }
  componentDidMount() {
    fetch("http://18.216.159.54/notice/list/0")
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          pagination: json
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let numbers = this.state.pagination;
    return (
      <div className="pagination-align">
        <Pagination>
          {this.props.page !==1 ? <Pagination.First onClick={this.props.handle.bind(null,1)}/>: <Fragment/>}
          {this.props.page !==1 ? <Pagination.Prev onClick={this.props.handle.bind(null,this.props.page-1)}/> : <Fragment/>}
          {numbers.map(row =>
            this.props.page === row ? (
              <BoardActiveItem key={row} row={row} />
            ) : (
              <BoardItem key={row} row={row} handle={this.props.handle}/>
            )
          )}
          {this.props.page !== this.state.pagination.length ? <Pagination.Next onClick={this.props.handle.bind(null,this.props.page+1)}/> :<Fragment/>}
          {this.props.page !== this.state.pagination.length ? <Pagination.Last onClick={this.props.handle.bind(null,this.state.pagination.length)}/> : <Fragment/>}
        </Pagination>
      </div>
    );
  }
}

export default Paginations;

class BoardItem extends React.Component {
  render() {
    return <Pagination.Item onClick={this.props.handle.bind(null,this.props.row)}>{this.props.row}</Pagination.Item>;
  }
}

class BoardActiveItem extends React.Component {
  render() {
    return <Pagination.Item active>{this.props.row}</Pagination.Item>;
  }
}
