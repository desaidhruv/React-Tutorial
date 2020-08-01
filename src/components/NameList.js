import React from 'react'
// List Rendering
// We should use key as a prop whenever we use Lists of elements
// Keys give elements a stable identity.
// Keys help react identify which items have changed, are added, or removed.
// Help in efficient update of user interface.
// We can use index as key only if : 
// The items in your list do not have a unique id.
// The list is a static list and will not change.
// List will never be reordered or filtered.
import Person from './Person'
function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            age: 20,
            name: 'Dhruv',
            skill: 'React'
        }, 
        {
            id: 2,
            age: 18,
            name: 'Sakshu',
            skill: 'AI/ML'
        }, 
        {
            id: 3,
            age: 23,
            name: 'Hrithik',
            skill: 'Angular'
        }
    ]
const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return (<div>{nameList}</div>)
}

export default NameList
