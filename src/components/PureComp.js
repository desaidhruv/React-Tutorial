// We can create Pure Component by extending PureComponent Class.
// A PureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the
// props and the state of the component.
// Shallow comparison means that it checks whether the state or props has the same ref or not, if they have same ref, it will return true.
// If there is no difference, the component is not re-rendered. --> performance boost.
// It is a good idea to ensure that all the children componemts are also pure components to avoid unexpected behavior.
// When using PureComponent, never mutate the state. Always return a new object that reflects the new state.
import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure Component render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp