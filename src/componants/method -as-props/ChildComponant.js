import React from 'react'

export default function ChildComponant(props) {
    return (
        <div>
            <button onClick={() => {props.greetHandler('child')}}>Greet Parent</button>
        </div>
    )
}
