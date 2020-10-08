import React, {Component} from 'react';
import './App.css';
import DrumKit from './components/DrumKit/DrumKit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      playing: false
    }
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
          <DrumKit playing={false} playSound={this.playSound}/>
        </header>
      </div>
    )
  }
}

export default App;
