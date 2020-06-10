import React from "react";
import "./styles.css";

export default class Autofocus extends React.Component {
  constructor() {
    super();
    this.handelClick1 = this.handelClick1.bind(this);
    this.handelClick2 = this.handelClick2.bind(this);
    this.focusRef1 = React.createRef();
    this.focusRef2 = React.createRef();
  }

  handelClick1() {
    console.log(this.focusRef1.current);
    this.focusRef1.current.focus();
  }

  handelClick2() {
    console.log(this.focusRef2.current);
    this.focusRef2.current.focus();
  }
  render() {
    return (
      <>
        <hr />
        <h2>Learning Autofocus using React Ref</h2>
        <input
          type="text"
          name="input1"
          ref={this.focusRef1}
          placeholder="Input 1"
        />
        <br />
        <br />
        <input
          type="text"
          name="input2"
          ref={this.focusRef2}
          placeholder="Input 2"
        />
        <br />
        <br />
        <button id="focusButton" onClick={this.handelClick1}>
          Click to Focus input 1
        </button>
        &nbsp;
        <button id="focusButton2" onClick={this.handelClick2}>
          Click to Focus input 2
        </button>
        <br />
        <br />
      </>
    );
  }
}
