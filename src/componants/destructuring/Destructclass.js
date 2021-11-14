import React, { Component } from 'react'

export default class Destructclass extends Component {
    render() {
        const {name,heroName} = this.props
        // const {state1,state2} = this.state
        return (
            <div>
                <h1>Welcome {name} - {heroName}</h1>
            </div>
        )
    }
}
