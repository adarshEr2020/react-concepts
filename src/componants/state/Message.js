import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"welcome visitor"
        }
    }
    changeMessage(){
        this.setState({
            message:"thank  you for the click"
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>click</button>
            </div>
        )
    }
}
