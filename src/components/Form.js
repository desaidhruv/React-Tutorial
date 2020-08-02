import React, { Component } from 'react'
// To convert normal HTML to controlled react component we need to follow two steps.
// First, create the component state that will control the value of input element.
// Next, Assign this state property as the value of the input element.
// Second step, hadnling the onChange event.
// We assign an arrow function to the onChange event.
// When we assign the handler to the onChange event, the event itself is passed as a parameter.
// Using the event parameter of arrow function, we can extract the value of the event element using event.target.value
// All we have to do is assign this value to the state.
class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    handleUserChange = event => {
        this.setState({ 
            username: event.target.value
        })
    }
    handleCommentsChange = event => {
        this.setState({ 
            comments: event.target.value
            
        })
    }
    handleSelectChange = event => {
        this.setState({ 
            topic: event.target.value
            
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    render() {
        const {username, comments, topics} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label><br></br>
                    <input type="text" value={username} onChange={this.handleUserChange}/>
                </div><br></br>
                <div>
                    <label>Comments:</label><br></br>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic: </label>
                    <select value={topics} onChange={this.handleSelectChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
