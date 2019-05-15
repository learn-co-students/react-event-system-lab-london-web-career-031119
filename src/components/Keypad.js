// Code Keypad Component Here
import React, { Component } from 'react';
class Keypad extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   touchKeypad = () => {
      console.log('Entering password...')
   }
   render() {
      return (
         <div>
            <input
               type="password"
               onKeyUp={this.touchKeypad} >
            </input>
         </div>
      );
   }
}

export default Keypad;