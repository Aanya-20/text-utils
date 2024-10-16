import React, { Component } from "react";
class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sajita",
    };
    console.log("LifeCycleA constructor");
  }
  static getDrivedStateFromProps(props, state) {
    console.log(" LifeCycleA getDrivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
  render() {
    console.log("LifeCycleA render");
    return <div>LifeCycleA</div>;
  }
}

export default LifeCycleA;
