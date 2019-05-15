// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   focusButton = () => {
      console.log('Good!')
   }
   blurButton = () => {
      console.log('Hey! Eyes on me!')
   }
   render() {
      return (
         <button
            onFocus={this.focusButton}
            onBlur={this.blurButton}
         >

         </button>
      );
   }
}

export default EyesOnMe;