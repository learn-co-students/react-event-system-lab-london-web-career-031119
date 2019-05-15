// Code Keypad Component Here
import React, { Component } from "react";

class keypad extends Component {
  keypad = () => {
    console.log("Entering password...");
  };
  render() {
    return <input onKeyUp={this.keypad} type="password" />;
  }
}

export default keypad;
