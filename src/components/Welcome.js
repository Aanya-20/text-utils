import { Component } from "react";

// class component
class Welcome extends Component {
    render(){
        // const {name ,heroName} = this.props
        // return <h1>Welcome {name} marry to {heroName}</h1> // these two line say destructuring of props in class component
         return <h1>Welcome {this.props.name} marry to {this.props.heroName}</h1>
    }
}
export default Welcome