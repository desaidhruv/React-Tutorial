import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Dhruv'
        }
        console.log('Lifecyle B Const')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecyle B getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('Lifecyle B componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('Lifecyle B  shouldComponentUpdate')
        return null
    }
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('Lifecyle B  getSnapshotBeforeUpdate')
        return null
    }
    componentDidMount() {
        console.log('Lifecyle B componentDidMount')
    }
    render() {
        console.log('LifecyleB Render')
        return (
            <div>
                LifeCycle
                
            </div>
        )
    }
}

export default LifeCycleB
