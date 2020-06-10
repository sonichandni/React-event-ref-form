import React from "react";
import "./styles.css";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.handelClick = this.handelClick.bind(this);
    this.decClick = this.decClick.bind(this);
    this.state = {
      count: 0
    };
  }

  handelClick() {
    // Increment counter
    this.setState({
      count: this.state.count + 1
    });
  }

  decClick() {
    // Decrement counter
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <>
        {/* React Fragments - <></> */}
        <h2>
          Counter increment decrement with React to understand event handeling
        </h2>
        <button id="countButton" onClick={this.handelClick}>
          Increment Count
        </button>
        &nbsp;
        <button id="decButton" onClick={this.decClick}>
          Decrement Count
        </button>
        <br />
        <br />
        Count: {this.state.count}
        <br />
      </>
    );
  }
}
