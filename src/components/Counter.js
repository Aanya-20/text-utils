import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
//   increment = ()=>{
//     this.setState({
//        count:this.state.count+1
//     })
//   }
increment(){
    this.setState({
        count:this.state.count + 1
    }, ()=>{console.log('Callback value',this.state.count)}) // when ever you have to execute some code after the state change then write it in callback function not after the setState()
    console.log(this.state.count) // here this method is execute fast before update the setState() bcz it is asynchronise method we call again better use another parameter of setState() method which contains a callback function which simple log the updated state value
}
increase(){
    this.setState((preState ,props) => ({
        count:preState.count + 1
    })) // when ever you update a state using previous state then use a function argument and the second argument is props object
}
incrementFive(){
    this.increase();
    this.increase();
    this.increase();
}
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        {/* <button onClick={this.increment}>Increment</button> also write the below */}
        <button onClick={ ()=> this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Incre</button>
      </div>
    );
  }
}

export default Counter;
