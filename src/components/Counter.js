import React, { Component } from 'react'
// We can not change the state directly. We need to use setState method.
// The only place where you can assign this.state is the constructor.
// setState method has 2 parameters : setState object and callback function.
// Whenever you need to execute some code after the state has been changed, do not place that code right after the setState method.
// Instead, place that code within the callback function which is passed as a second parameter to the setState method.
// React may group multiple setState calls into a single update for better performance.
// So all the five setState calls are done in one single go and the updated value does not carry over.
// So whenever you have to update the state based on the previous state, we need to pass the function as an argument to setState method instead of an object.
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    Increment(){
        // this.setState({ 
        //     count: this.state.count + 1 
        // },() => {
        //     console.log('Callback Value',this.state.count)
        // });
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }
    IncrementFive() {
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }
    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.IncrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
