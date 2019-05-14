import React, { Component } from "react";

class Keypad extends Component {

  pass = () => console.log('Entering password...');
  
  render() {
    return (
      <input type="password" onKeyUp={this.pass} />
    );
  };
};

export default Keypad;