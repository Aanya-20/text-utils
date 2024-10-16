import React from "react";
// this component share the commom logic which is also known as higher order componet and we can follow naming convention while using it
const withCounter = (WrappedComponet,incrementNumber) =>{
 class WithCounter extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
           count :0
        }
      }
      incrementCount = ()=>{
          this.setState(preState =>{
              return {
                //   count : preState.count+1
                count : preState.count + incrementNumber
              }
          })
      } 
   render(){
    return <WrappedComponet count= {this.state.count} incrementCount={this.incrementCount}
    {...this.props}/> // spread operator for reamaing due to use of HOC
   }
  
 }
 return WithCounter
}
export default withCounter