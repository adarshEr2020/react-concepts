// Javascript xml(JSX) extention
// 
import React from 'react'

export default function Hello() {
    // componant with using JSX
    // return (
    //     <div>
    //         <h2>hello React</h2>
    //     </div>
    // )

    /**
     * without using JSX
     * CreatElement method takes three parameter(element ,optional,and string )
     * 
     */

    return React.createElement(
        "div",
        {id:'Hello', className:'dummyClass'},
        React.createElement(
            'h1',
            null,
            "hello adarsh",
        )
    )
}
