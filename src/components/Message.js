import React, { Component } from 'react';
// When we want to change the state of an object, Component State are used.
// We can not use props to change the state of an object as props are immutable.
// First step is to create a state object and initialize it and this is done usually in a class constructor.
// We use super() as we extend react's component class and a call has to be made to the base class constructor
// this.state is our state object and inside which we can initialize out properties(message in this case).
// Second step is to bind this state value in the render function.
// Third step is to add HTML or a button.
// Fourth or final step is to listen to the click event of button.
// To change the state of a component we need to call setState method
// A state is a private object that is maintained inside the component and it can influence what is rendered in the browser.
// Also, state can be changed within the browser.
class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage() {
        this.setState({ 
            message: "Thank you for subscribing."
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
        
    }
}

export default Message