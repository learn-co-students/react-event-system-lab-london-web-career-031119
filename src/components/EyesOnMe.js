// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends Component {
  state = {};

  focusEvent = () => {
    console.log("Good!");
  };

  blurEvent = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return <button onFocus={this.focusEvent} onBlur={this.blurEvent} />;
  }
}

export default EyesOnMe;
