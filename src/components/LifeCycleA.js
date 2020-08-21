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
    shouldComponentUpdate() {
        console.log('Lifecyle A shouldComponentUpdate')
        return null
    }
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('Lifecyle A getSnapshotBeforeUpdate')
        return null
    }
    componentDidMount() {
        console.log('Lifecyle A componentDidMount')
    }
    changeState = () => {
        this.setState({
            name: 'Dhruv Desai'
        })
    }
    render() {
        console.log('LifecyleA Render')
        return (
            <div>
                LifeCycle
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
