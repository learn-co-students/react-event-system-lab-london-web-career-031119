// Code Keypad Component Here
import React, { Component } from "react";

class Keypad extends Component {
  state = {};

  enterPassword = () => {
    console.log("Entering password...");
  };

  render() {
    return <input onKeyUp={this.enterPassword} type="password" />;
  }
}

export default Keypad;
