import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  changeInput = (event) => {
    this.setState({
      username: event.target.value, // here the event is captured
    });
  };
  commentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  selectChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);

    event.preventDefault(); // the page does not refresh
  };
  render() {
    // destructing all the properties here
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            // value={this.state.username} // if we do not use destructing then write this way
            onChange={this.changeInput}
          />{" "}
          {/* the username as a state property supplied as avalue to the value attribute of input */}
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            // value={this.state.comments}
            onChange={this.commentChange}
          ></textarea>
        </div>
        <div>
          <lable>Topic</lable>
          <select
            // value={this.state.topic}
            value={topic}
            onChange={this.selectChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
export default Form;
