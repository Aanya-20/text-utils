import React, { Component } from 'react'
import FRInput from './FRInput'

 class FRParentComp extends Component {
    constructor(props) {
      super(props)
    
     this.inputRef = React.createRef() // first steps for forwarding refs
    }
   clickHandler = () =>{
    this.inputRef.current.focus()
   } 
  render() {
    return (
      <div>
        <FRInput ref = {this.inputRef}></FRInput> {/* 2. steps attach the refs to child componet using the ref attribute */}
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}
export default FRParentComp