import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    userInput:''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
   
  }
  
  render() {
    return (
      <div >
        <input 
        type = "text"
        onChange={this.inputChangedHandler} 
        value = {this.state.userInput}/>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
