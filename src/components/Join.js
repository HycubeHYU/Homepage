import React, { Component } from 'react';

class Join extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 0,
            number : 0,
            phonenumber : 0,
            success : 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        console.log(e)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick(){
            this.setState({
                success:1
            })
        fetch("https://naver.com").then((res)=>{
            let rtn = res.text()
            if(res.status===200){
                return rtn
            }
            else{
                return null
            }
        }).then((res)=>{
            if(res){
                this.setState({
                    success:2
                })
            }
            else{
                this.setState({
                    success:0
                })
            }
        })
    }

    render() {
        return (
            <div className="join">
                {this.state.success===0?
                    <div>
                        Hycube 학회 가입
                        <br/>
                        이름  <input type="text" name="name" placeholder="홍길동" value={this.state.name===0?null:this.state.name} onChange={this.handleChange}/>
                        <br/>
                        학번 <input type="text" name="number" placeholder="2019123456" value={this.state.number===0?null:this.state.number} onChange={this.handleChange}/>
                        <br/>
                        전화번호 <input type="text" name="phonenumber" placeholder="01012345678" value={this.state.phonenumber===0?null:this.state.phonenumber} onChange={this.handleChange}/>
                        <br/>
                        <button onClick={this.handleClick}>가입하기</button>
                    </div>
                :
                    (this.state.success===2?
                        "회원 가입에 성공했습니다."
                    :
                        "Loding..."
                    )
                }

            </div>
        );
    }
}

export default Join;