import React from "react";
import "./styles.css";

export default class FormComponent extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      name: "",
      num: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitForm(event) {
    alert("Form Submited Successfully");
  }

  render() {
    return (
      <>
        <hr />
        <h2>
          {" "}
          Learning Forms using React Form ( For real project use{" "}
          <a href="https://jaredpalmer.com/formik/">Formik</a> )
        </h2>
        <form onSubmit={this.submitForm}>
          Name:{" "}
          <input
            value={this.state.name}
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          Account Number:{" "}
          <input
            value={this.state.num}
            type="text"
            name="num"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button type="submit"> Submit Form </button>
        </form>
        <br />
        <br />
        Name: {this.state.name}
        <br /> <br />
        Acc No.: {this.state.num}
      </>
    );
  }
}
