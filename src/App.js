import React, {Component} from 'react';
import './App.css';
import DrumKit from './components/DrumKit/DrumKit';

import crnch from './sounds/crnch.mp3';
import hh from './sounds/hh.mp3';
import kiiiick from './sounds/kiiiick.mp3';
import kik from './sounds/kik.mp3';
import snare from './sounds/snare.mp3';

class App extends Component {
  constructor() {
    super();
    this.state = {
      playing: false
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode == 65) {
        this.playSound(e, kik)
      } else if(e.keyCode == 83) {
        this.playSound(e, snare)
      } else if(e.keyCode == 68) {
        this.playSound(e, hh) 
      } else if(e.keyCode == 70) {
        this.playSound(e, crnch)
      }
    })
  }

  playSound = (e, source)=> {
    this.audio = new Audio(source)
    console.log(e.target)
    this.audio.play();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DrumKit playing={false} playSound={this.playSound} handleKeyPress={this.handleKeyPress} />
          <input type="hidden" id="one" onKeyPress={this.handleKeyPress} />
        </header>
      </div>
    )
  }
}

export default App;
