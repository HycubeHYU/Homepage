import React, { Component } from 'react';
import Table from './Table';
import Join  from './Join';

class Iframe extends Component {
    constructor(props){
        super(props)
        this.state= {
            response : "Loding...",
            animate : 0
        }
        this.handleAnimate=this.handleAnimate.bind(this);
        this.handleHtml(this.props.active)
    }
    
    componentWillReceiveProps(next){
        if (this.props.active>next.active){
            this.setState({
                animate : 1
            })
        }
        else if(this.props.active<next.active){
            this.setState({
                animate : 2
            })
        }
        this.handleHtml(next.active)
    }

    handleHtml(where){
        fetch("/JumpToOpenSource/documents/"+where+".html").then((res) =>{
            let rtn = res.text();
            if(res.status===200){
                return rtn
            }
            else{
                return null
            }
        }).then((res) => {
            if(res){
                this.setState({
                    response : res
                })
            }
            else{
                this.setState({
                    response : "띠용? 로딩이 되지 않았습니다."
                })
            }
        })
    }

    handleAnimate(){
        if (this.state.animate ===1){
            this.setState({
                animate:3
            })
        }
        else if(this.state.animate ===2){
            this.setState({
                animate:4
            })
        }
        else{
            this.setState({
                animate:0
            })
        }
    }

    render() {
        return (
            <div className="mainframe">
                <div className= {
                    this.state.animate <= 0?
                        (this.state.animate === -1?
                                "maintext-up"
                                :
                                "maintext"
                        )
                        :
                        (this.state.animate <=2 ?
                            (this.state.animate === 1 ? 
                                "maintext-rightout"
                                :
                                "maintext-leftout"
                            ) 
                            :
                            (this.state.animate === 3 ? 
                                "maintext-leftin"
                                :
                                "maintext-rightin"
                            )
                        )
                } onAnimationEnd={this.handleAnimate} >
                    {this.props.active === 0 && (this.state.animate <= 0 || this.state.animate >= 3) ? <Table/> : ""}
                    {this.props.active === 1 && (this.state.animate <= 0 || this.state.animate >= 3) ? <Table/> : ""}
                    {this.props.active === 2 && (this.state.animate <= 0 || this.state.animate >= 3) ? <Table/> : ""}
                    {this.props.active === 3 && (this.state.animate <= 0 || this.state.animate >= 3) ? "어떤식으롱" : ""}
                    {this.props.active === 4 && (this.state.animate <= 0 || this.state.animate >= 3) ? <Table/> : ""}
                    {this.props.active === 5 && (this.state.animate <= 0 || this.state.animate >= 3) ? "하이큐브짱" : ""}
                    {this.props.active === 6 && (this.state.animate <= 0 || this.state.animate >= 3) ? <Join/> : ""}
                </div>
            </div>
        );
    }
}

export default Iframe;