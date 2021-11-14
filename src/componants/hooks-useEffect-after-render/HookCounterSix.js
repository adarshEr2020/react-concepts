import React, { Component } from 'react'

// using lifecycle method in class component
export default class HookCounterSix extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("updating document title");
        if (prevState.count !== this.state.count) {
            document.title = `Clicked ${this.state.count} times`
        }

    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}
