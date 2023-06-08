import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

class App extends Component {
  render(){
  return (
    <div className="App">
    
     <Navbar name = "Textutils" />
     <Alert alert = "this is the text Editor"></Alert>
     <TextForm/>
    </div>
      )
  }
}

export default App
