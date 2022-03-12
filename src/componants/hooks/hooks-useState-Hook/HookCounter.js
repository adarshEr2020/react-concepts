import React,{useState} from 'react'

// "Only call hooks at the Top level"
// Don't call hooks inside loops, condition, or nested functions 

// "Only call Hooks from Functions"
// call them from within React functional componant and not just any regular js Function

export default function HookCounter() {
    const [count, setCount] = useState(0)


    return (
        <div>
            <button onClick={() => setCount(count +1)}>Count {count}</button>
        </div>
    )
}
