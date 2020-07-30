import React, { Component } from 'react'; 
import Unicorns from './Unicorn';
import AddUnicorn from "./AddUnicorn";
import profileImage from "./img/pink.png";
import './App.css';

class App extends Component {

  state= {
    unicorns : [
      {name: 'Leila', age:17, color:'pink', id:1},
      {name: 'Judah', age:7, color:"orange", id:2},
      {name: 'Amina', age:17, color:'baby blue', id:3}
    ]
  }
  addUnicorn = (unicorn) => {

unicorn.id = Math.random();
let unicorns = [...this.state.unicorns, unicorn];
this.setState({
  unicorns: unicorns
})    
  }
  render() {
    return(
      <div className="App">
        <h1>My Second React App</h1>
        <p>Greetings</p>
        <img src={profileImage} alt="profile-image"/>
       
        <Unicorns unicorns={this.state.unicorns}/>
       
        <AddUnicorn addUnicorn={this.addUnicorn} />
      </div>
    
    );
  }
} 

export default App;
