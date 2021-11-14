import React, { Component } from 'react'

// event handling in class componant
export default class ClassClick extends Component {
    clickHandler = () => {
console.log(" button clicked");
    }
    render() {
        return (
            <div>
                <h3>Click button</h3>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}
