import React, { Component, PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";
import MemoComp from "./MemoComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Vishwas",
      })
    }, 2000);
  }
  render() {
    // console.log("*******************Parent Componet Render*******************");
    return (
      <div>
        Parent Componet
        <MemoComp name = {this.state.name}></MemoComp>
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
        */}
      </div>
    );
  }
}
