import React, { Component } from 'react';

class Join extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 0,
            number : 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render() {
        return (
            <div>
                이름  <input type="text" name="name" placeholder="홍길동" value={this.state.name===0?null:this.state.name} onChange={this.handleChange}/>
                <br/>
                학번 <input type="text" name="number" placeholder="2019123456" value={this.state.number===0?null:this.state.number} onChange={this.handleChange}/>
                <br/>
                <button>가입하기</button>
            </div>
        );
    }
}

export default Join;