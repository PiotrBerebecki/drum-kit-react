import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      soundSrc: [
        { 
          id: 'one',
          src: '../public/assets/image/'
        }
      ]
    };
  }
  
  render() {
    return (
      <section id="drumkit">
        <Button />
      </section>
    );
  }
}

export default App;
