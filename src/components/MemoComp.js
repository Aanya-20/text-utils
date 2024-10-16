import React from 'react'
 function MemoComp({name}) { // destructing the name props here
    console.log('Memo Componet Render')
  return (
    <div>
     {name} 
    </div>
  )
}
export default React.memo(MemoComp)  // due to memo only parent componet called