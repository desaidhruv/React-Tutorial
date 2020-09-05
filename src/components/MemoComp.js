import React from 'react'
// What PureComponents is to class based components, Memo is to function based components.
function MemoComp({name}) {
    console.log('Rendering Memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
