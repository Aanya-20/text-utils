import React from 'react'

function ChildComponet(props) {
  return (
    <div>
        {/* <button onClick={props.handelParent}>childClick</button> // recive data from parent component methods */}
      <button onClick={()=>props.handelParent('child')}>childClick</button> // passing data from child to parent use this arrow function
    </div>
  )
}

export default ChildComponet
