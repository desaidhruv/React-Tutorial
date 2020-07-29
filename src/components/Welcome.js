import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {name,heroName} = this.props // destructuring props in class component.
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome