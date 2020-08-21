import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Dhruv'
        }
        console.log('Lifecyle A Const')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecyle A getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('Lifecyle A componentDidMount')
    }
    render() {
        console.log('LifecyleA Render')
        return (
            <div>
                LifeCycle
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
