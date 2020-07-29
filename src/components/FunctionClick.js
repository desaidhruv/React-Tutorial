import React from 'react'
// With jsx, we pass a function as the event handler rather than a String.
// So we use curly braces. 
function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick