import { Component } from "react";

import React from "react";
class Message extends Component{
    constructor(){
        super() // bcz we extends message class , so we call the base class constructor
        this.state = {
            message :   "Welcome To State"          // here create a state object
        }
    }
    onClickMessage(){
      this.setState({
        message: "Thank you for the subscribing"
      })// this methods accepts some object which is nothing but the new sate of an object
    }
    onChangeMessage =() => {
    this.setState({
    message:"You have unsubscribe it"
})
    }
render(){
    return(
    <div>
    <h1>hi {this.state.message}</h1>
    <button onClick={() => this.onClickMessage()}>Subscribe</button>  {/* this is called a roow function */} 
    <button onClick ={this.onChangeMessage}>UnSubscribe</button> {/*also doing this way */}
    </div>
 )
}
}
export default Message