import React, { Component } from 'react'

class Keypad extends Component {
  state = {  }
  render() { 
    return (
      <input type="password" onKeyUp={() => console.log('Entering password...')} />
    )
  }
}
 
export default Keypad