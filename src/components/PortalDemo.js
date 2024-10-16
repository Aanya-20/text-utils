import React from 'react'
import  ReactDOM  from 'react-dom';
function PortalDemo() {
  return ReactDOM.createPortal( // the first parameters using createPortal is  can be any  element that react can render
   
      <h1>Portal Demo</h1>,
   document.getElementById('portal-root')
  )
}

export default PortalDemo
