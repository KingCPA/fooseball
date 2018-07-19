import React, { Component } from 'react';
import './App.css';
import images from './images/worldcup.jpg';



class App extends Component {
  render() {
    return (
      <div className = "body">
      <div className="App">
        <h1>Welcome To The World Cup Of Foosball</h1>
        <p>Lets get started click cup</p>
        <button className="cup"><img src={images} alt='worldcup' />lets play click cup</button>
      </div>
      </div>
    );
  }
}

export default App;
