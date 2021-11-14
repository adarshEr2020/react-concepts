import React from 'react'

// using props here
// write props in {} in jsx
// 
export default function Greet(props) {
    console.log(props);
    // props are immutable 
    // props.name='hello' 
    return (
        <div>
            <h2>Hello {props.name} HeroName {props.heroName}</h2>
            {props.children}
        </div>
    )
}
