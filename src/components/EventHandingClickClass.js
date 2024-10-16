import React, { Component } from 'react'

class EventHandingClickClass extends Component {
    handleMessage(){
        console.log("click handling in class component")
    }
  render() {
    return (
      <div>
        <button onClick={this.handleMessage}>click me</button>
      </div>
    )
  }
}
export default  EventHandingClickClass