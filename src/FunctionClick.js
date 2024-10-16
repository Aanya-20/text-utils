import React from 'react'

function FunctionClick() {
   function onFuctionComponent(){
        console.log("eventing handling in function component") // in js define a fuction with another fuction
    }
  return (
    <div>
      <button onClick={onFuctionComponent}>click</button>
    </div>
  )
}

export default FunctionClick
