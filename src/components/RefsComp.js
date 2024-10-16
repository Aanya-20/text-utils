import React, { Component } from 'react'

 class RefsComp extends Component {
    constructor(props) {
      super(props)
    
    this.inputRef= React.createRef() // it is created within the constructor so we can use it through out the component
    this.cbRef = null
    this.setCbRef = (element) =>{
     this.cbRef = element  // asign this property with a dom element with a parameter(this is callback approach to access dom node )
    }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus() // createRef approach
        // console.log(this.inputRef)
    }
    handleClicker = () => {
   alert( this.inputRef.current.value)
    }
  render() {
   
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <input type="text" ref={this.cbRef}></input>
        <button onClick={this.handleClicker}>click</button>
      </div>
    )
  }
}
export default RefsComp