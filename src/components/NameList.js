import React from 'react'
// List Rendering
import Person from './Person'
function NameList() {
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
    const personList = persons.map(person => <Person person={person}/>)
    return (<div>{personList}</div>)
}

export default NameList
