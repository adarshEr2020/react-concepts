import React, { Component } from 'react'

/*
 binding this event handler (there are 4 way to bind this)
 1st way te bind the this 
 2nd way te bind the this using Arrow func 
 3rd way to binding (in the class constructor) 
 4th way to binding using (class property as a arrow function) 
*/
export default class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello chingam"
        }

        // binding in constuctor 
        // this.clickHandler = this.clickHandler.bind(this)
    }


    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    //     console.log(this);
    // }

    // 4th way
    clickHandler = () =>{
        this.setState({
            message:"Event handled"
        })
    }
    render() {
        const { message } = this.state
        return (
            <div>
                <h2>Event Binding</h2>
                <h3>{message}</h3>
                {/* 1st way */}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

                {/* 2nd way */}
                {/* <button onClick={() => this.clickHandler()}>click</button> */}
                {/* 3rd way*/}
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}
