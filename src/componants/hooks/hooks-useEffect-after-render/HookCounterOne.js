import React, { useEffect, useState } from 'react'

// useEffect in functional component handle lifecycle method(componentDidMount,
//componentDidUpdate,componentDidUnmount)

export default function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // useEffect func run after every render method
    useEffect(() => {
        console.log('useEffect-updating document title')
        document.title = `you clicked ${count} times`
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click{count}</button>
        </div>
    )
}
