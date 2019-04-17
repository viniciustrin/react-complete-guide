import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>  oi, eu sou react app </h1>
    //   </div>
    // );
    return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Oi, eu sou react app2'));
  }
}

export default App;
