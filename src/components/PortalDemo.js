import React from 'react'
import ReactDOM from 'react-dom'
// We use portal when we want to deal with the parent component's CSS when the child component is a Model, pop-up or tooltip.
// Last point to discuss about portals is event bubbling.
// Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way that includes event bubbling.
// So an event fired from inside a portal will propagate to ancestors in the containing react tree even if those elements are not ancestors in the DOM tree.
function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portals Demo</h1>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
