import React from 'react'
  // inline css use in componet
  const heading= {
    fontSize: '30px',
    color :'blue'
}
 function Inline() {
  
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}
export default Inline