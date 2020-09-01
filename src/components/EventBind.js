import React, { Component } from 'react'
// this keyword is undefined in an event handler 
// That is the reason event binding is necessary in react class components.
// First method : onClick={this.clickHandler.bind(this)} this method re renders the component and can provide some performance issues in complex projects.
// Second method : onClick={() => this.clickHandler()} this also has performance implications.
// Third method : this.clickHandler = this.clickHandler.bind(this) Binding the event handler in the constructor as opposed to binding in the render method.
// Fourth method : Use an arraow function as a class property.
export class EventBind extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                message: "Hello"
            }
            this.clickHandler = this.clickHandler.bind(this)
        }
        
        clickHandler() {
            this.setState({
                message: "Goodbye!"
            })
            console.log(this)
        }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button>                 */}
                {/* <button onClick = {() => this.clickHandler()}>Click</button>                 */}
                <button onClick = {this.clickHandler}>Click</button>                
            </div>
        )
    }
}

export default EventBind
