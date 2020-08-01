import React, { Component } from 'react'
// We use two render methods inside the jsx because if-else statements don't work inside the jsx 
// because jsx is just syntactic sugar for function calls and object construction.
// Second approach of implementing if-else is using element variables. We use JS variables to store elements. 
// The second approach will help you render the entire component or a part of component.
// Third approach : ternary approach.
// Final approach : short circuit.
class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {
        return this.state.isLoggedIn && <div>Welcome Dhruv</div> //Short circuit approach, if left side is true, then render right side.
        // return this.state.isLoggedIn ?(
        //         <div>Welcome Dhruv</div>
        //     ) : (

        //         <div>Welcome Guest</div>
        //     )
        
        // let message // element variable approach
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Dhruv</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome Dhruv</div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }
        // return (
        //     <div>
                
        //         <div>Wecome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
