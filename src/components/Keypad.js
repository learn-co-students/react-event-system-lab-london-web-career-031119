import React, { Component } from "react";

class Keypad extends Component {
  state = {};

  handleChange = e => {
    console.log("Entering password...");
  };

  render() {
    return <input type="password" onKeyUp={this.handleChange} />;
  }
}

export default Keypad;
