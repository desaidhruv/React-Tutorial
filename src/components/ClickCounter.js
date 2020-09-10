import React, { Component } from 'react'
// When we want to share common functionality between components, we use Higher Order Components
// HOC is a pattern where a fucntion takes a component as an argument and returns a new component.
// const NewComponent = higherOrderComponent(originalComponent)
// const IronMan = WithSuit(TonyStark)
class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return {count:prevState.count + 1}
        })
    }
    render() {
        const {count} = this.state  
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {count} times</button>                
            </div>
        )
    }
}

export default ClickCounter
