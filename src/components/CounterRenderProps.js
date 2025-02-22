import React, { Component } from 'react'

class CounterRenderProps extends Component {
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
                count : preState.count + 1
              }
          })
      } 
  render() {
    return (
      <div>
        {this.props.render(this.state.count , this.incrementCount)}
      </div>
    )
  }
}

export default CounterRenderProps
