import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'Hi Event'
    }
   // this.eventHandler = this.eventHandler.bind(this) // 3rd approach to bind a event
}
// eventHandler(){
//     this.setState({
//         message : 'Hello event' 
//     })
//     console.log(this)
// }
eventHandler =()=>{ // class property as arrow function
    this.setState({
               message : 'Hello event' 
            })
}
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.eventHandler.bind(this)}>EventClick</button> event bind usinf bind() otherwise it return undefined / 2nd is use arror fuction for event bind
        <button onClick ={()=>this.eventHandler()}> click </button>     */}
        <button onClick={this.eventHandler}>clickEvent</button>
             </div>
    )
  }
}

export default EventBind
