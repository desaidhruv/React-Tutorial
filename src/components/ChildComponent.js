import React from 'react'
// When we want to pass the data from child component to the parent component we use the arrow function which allows us to send as many parameters as we want.
function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child') }>Greet Parent</button> // Greet Parent using Child component.
        </div>
    )
}

export default ChildComponent
