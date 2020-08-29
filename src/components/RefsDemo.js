// Suppose we want to focus the input field as soon as the page is loaded.
// Using refs we can do it easily.
// We can do this in three simple steps.
// The first step is to create a ref. --> by using React.createRef
// It is common to create the refs in the constructor so that theu can be referenced throughout the component.
// The second step is to attach this ref to our input element in the render method.
// Third step is to call the focus method on this input method.
import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref = { this.inputRef}/>
                <button onClick={this.clickHandler}>Hey bitch</button>
            </div>
        )
    }
}

export default RefsDemo
