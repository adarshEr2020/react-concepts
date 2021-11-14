
import React from 'react'
import ListTtem from './ListTtem';
export default function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(number =><ListTtem key={number.toString()} value={number}/>);
    return (
        <div>
            {listItems}
        </div>
        
        
    )
}
