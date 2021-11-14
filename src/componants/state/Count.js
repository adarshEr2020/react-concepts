import React, { Component } from 'react'

export default class Count extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }

    countClick = () => {
        // here setState method takes to paramether object  
        // this.setState({
        //     counter: this.state.counter + 1

        // },
        //     () => {
        //         console.log("callback updated value-"+this.state.counter)
        //     }
        // )
        // console.log("print previous value"+this.state.counter);

// when update state based on the previous value ,pass in function as an argument 
        this.setState((prevState) =>({
            counter:prevState.counter+1
        }))
        console.log(this.state.counter);
    }
    
    render() {
        return (
            <div>
                <h2>Count click{this.state.counter}</h2>
                <button onClick={() => this.countClick()}>Count</button>
            </div>
        )
    }
}
