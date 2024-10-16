import React, { Component } from 'react'

 class RegularComp extends Component {
  render() {
    console.log('Regular Component render')
    return (
      <div>
        Regular Componet {this.props.name}
      </div>
    )
  }
}

export default RegularComp
