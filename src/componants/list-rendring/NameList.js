import React from "react"
import Person from "./Person"

// list componat only responsible to render the list 
// (key props can not accessble in child componant
// key is a reserved word in ract for rendering ui 
export default function NameList() {
    const persons = [
        {
            id: 1,
            name: 'bruce',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'clreck',
            age: 30,
            skill: 'react'
        },
        {
            id: 3,
            name: 'diana',
            age: 30,
            skill: 'react'
        }
    ]
    const personList = persons.map(person => <Person key={person.name} person={person} />)
    return (
        <div> {personList}</div>
    )
}
