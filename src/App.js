import React, { Component } from "react";
import "./styles.css";
import CustomInput from "./components/CustomInput";
import Button from "./components/Button";

export default class App extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  render() {
    return (
      <div className="App">
        <form className="form">
        <CustomInput
            labelText="Name"
            id="Name"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />

          <Button type="button" color="facebook" className="form__custom-button">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
