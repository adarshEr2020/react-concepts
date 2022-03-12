import React,{useState,useEffect} from 'react'

export default function HookMouse() {
const [x, setX] = useState(0)
const [y, setY] = useState(0)

const logMousePosition = e =>{
console.log('mouse event')
setX(e.clientX)
setY(e.clientY)
}

// using
useEffect(() =>{
    console.log('useEffect called');
    window.addEventListener('mousemove',logMousePosition)
    return() =>{
        console.log('component unmounting code');
        window.removeEventListener('mousemove' ,logMousePosition)
    }
},[])
    return (
        <div>
            Hooks X- {x} Y- {y}
        </div>
    )
}