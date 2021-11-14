import React, { Component } from 'react'
/**
 *  conditional rendiring 
 * 1st way to use (if else)
 * 2nd way to use Element variables approch
 * 3rd ternary oprerater conditonal appoch
 * 4th short circuit appoch 
 *  */
export default class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        // 1st approch @@@
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Adarsh</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        //2nd approch @@@
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Adarsh</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div> {message}</div>

        //3rd approch @@@
        return this.state.isLoggedIn ?
            <div>Welcome Adarsh</div>
            :
            <div>Welcome Guest</div>

        //4th appoch @@@
        // return this.state.isLoggedIn && <div>Welcome Adarsh</div>
    }
}
