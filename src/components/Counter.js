import React, { Component } from 'react'

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
