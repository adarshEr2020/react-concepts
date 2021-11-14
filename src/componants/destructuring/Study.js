import React from 'react'

// two ways to destruct props in the functional componant
// in ths parameter it self or in the funtion body
export default function Study(props) {
    const { name, subject } = props
    return (
        <div>
            <h1> student name- {name}  <br/> subject- {subject}</h1>
        </div>
    )
}
