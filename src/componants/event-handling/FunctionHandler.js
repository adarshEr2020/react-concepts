import React from 'react'
// event handling functional componant
export default function FunctionHandler() {
    const clickHandler = () => {
        console.log("button clicked");
    }
    return (
        <div>
            <h1>Event Handling</h1>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}
