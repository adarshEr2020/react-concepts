import React from 'react'

// person componat only resonsible to rendering to prerdon HTML
export default function Person(props) {
const {person} = props
    return (
        <div>
            <h2>
                i am {person.name}. i am {person.age} years old. i am {person.skill}
            </h2>
        </div>
    )
}
