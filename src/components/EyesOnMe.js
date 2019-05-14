import React, { Component } from "react";

class EyesOnMe extends Component {

  runFocus = () => console.log('Good!')

  runBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.runFocus} onBlur={this.runBlur} ></button>
    );
  };
};

export default EyesOnMe;