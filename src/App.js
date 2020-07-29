import React, { Component } from 'react'; 
import Kaija from './Kaija';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>My Second React App</h1>
        <p>Greeting :]</p>
        <Kaija name="Sparkle" age="2" color="Pink"/>
        <Kaija name="Sunshine" age="2" color="Yellow"/>
      </div>
    );
  }
}

export default App;
