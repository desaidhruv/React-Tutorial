import React from 'react'
// Unlike last time, where the ref was pointing to the class component, We will use forwarding ref technique.
// To allow the parent component to directly reference the native input element.
// We have 4 simple steps to do so.
// First,  create a ref in the parent component(FRParentInput).
// Second step, attach the ref to the child component using the ref attribute.
// Third step, you need to forward this ref to the input element in the child component.
// So the arrow function is passed as a parameter to the forwardRef.
// Now we know that every functional component receives props as their parameters.
// But when a component is passed as a parameter to the create ref method, it receives the ref attribute as its second parameter
// In this way, by passing the second parameter as ref, we are passing the ref from parent component to the child.

// function FRInput() {
    // return (
    //     <div>
    //         <input type="text"/>
    //     </div>
    // )
// }

const FRInput = React.forwardRef((props, ref) => {
        return (
            <div>
                <input type="text" ref = {ref}/>
            </div>
        )
    }
) 
export default FRInput
