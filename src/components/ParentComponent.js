import React, { Component } from 'react'
import ChildComponet from './ChildComponet';

 class ParentComponent extends Component {
    constructor(props){
      super(props)
      this.state= {
        parentName : 'Parent'
      }
      this.greetParent=this.greetParent.bind(this);
    }
    // greetParent(){
    //     alert(`Hello ${this.state.parentName}`) 
    // }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName} `)
    }
  render() {
    return (
      <div>
        <ChildComponet handelParent={this.greetParent}></ChildComponet>
      </div>
    )
  }
}

export default ParentComponent
