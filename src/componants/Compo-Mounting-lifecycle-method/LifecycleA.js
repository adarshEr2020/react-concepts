import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export default class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:"adarsh"
        }
        console.log("LifecycelA constructor");
    }


    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }
    render() {
        console.log("LifecycleA render");
        return (
            <div>   
                <h2>Lifecycle method</h2>
                <LifecycleB />
            </div>
        )
    }
}
