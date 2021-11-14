import React,{useState} from 'react'
import HookMouse from '../hooks-run-effect-only-onces/HookMouse'

export default function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </div>
    )
}
