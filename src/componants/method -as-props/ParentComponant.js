import React, { Component } from 'react'
import ChildComponant from './ChildComponant'
// methods as props 
// where commucate child com to parant and clasa

export default class ParentComponant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parentName: 'parent'
        }
        // constructor this binding here
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        // alert('Hello' + this.state.parentName)
        // using ES6 Features (Templete literals)
        alert(`Hello ${this.state.parentName} from ${childName}`)

    }
    render() {
        return (
            <div>
                <ChildComponant greetHandler={this.greetParent}/>
            </div>
        )
    }
}
