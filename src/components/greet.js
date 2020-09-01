import React from 'react';

const Greet = (props) => {
    const {name,heroName} = props // destructuring props in functional components.
return (
    <div>
        <h1>Hello {name} a.k.a {heroName}.</h1>
    </div>
) 
}

export default Greet