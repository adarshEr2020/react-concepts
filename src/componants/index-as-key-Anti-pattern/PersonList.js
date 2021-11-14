import React from 'react'

// index as key(when to use index as a key)
// 1. the items in your list do have a unique id.
// 2. the list is static list will not change.
// 3. the list will never be recorded or filtered.

export default function PersonList() {
    const persons = ['ravi', 'raman', 'karan',"raman"]
    const personList = persons.map((name,index) => <h2 key={index}>{index}{name}</h2>)
    return (
        <div>
            {personList}
        </div>
    )
}
