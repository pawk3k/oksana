import '../App.css';
import React, { Component } from "react";



class Form extends Component {


    constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: '',
    };
    this.state = this.initialState
  }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    };
    submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
    };

  render() {
    return (
        <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={this.handleChange}
      />
      <label for="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        onChange={this.handleChange}
      />
        <input type="button" className="btn btn-primary" value="Submit" onClick={this.submitForm} />
    </form>
  );
  }
}



export default Form;
