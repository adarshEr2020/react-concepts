import React from 'react'

export default function ListTtem(props) {
    const number = props.value
    return (
        <div>
            <li>{number}</li>
        </div>
    )
}
