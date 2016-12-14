import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sounds: [
        { 
          id: 'one',
          imageSrc: './assets/image/crash.png',
          audioSrc: './assets/sound/crash.mp3',
          audioObj: null
        },
        { 
          id: 'two',
          imageSrc: './assets/image/drum.png',
          audioSrc: './assets/sound/big-rack-tom.mp3',
          audioObj: null
        }
      ]
    };
  }
  
  render() {
    console.log(this.state.sounds[0]);
    return (
      <section id="drumkit">
        <Button />
      </section>
    );
  }
}

export default App;
