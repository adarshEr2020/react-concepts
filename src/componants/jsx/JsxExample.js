import React from 'react'

export default function JsxExample() {
    let i = 5;
    return (
        <div>
            <h1>{i > 1 ? 'greater' : 'less'}</h1>
        </div>
    );
}
