import React, { Component } from 'react'

export class EventBind extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 message: "Hello"
            }
        }
        
        clickHandler() {
            // this.setState(){
            //     message: "Goodbye!"
            // }
            console.log(this)
        }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick = {this.clickHandler}>Click</button>                
            </div>
        )
    }
}

export default EventBind
