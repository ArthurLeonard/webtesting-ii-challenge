import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    balls: 0,
    strikes: 0
  };

  render() {
    return (
      <div className="App">
        

        <div className = 'Display'>
          <button className = 'display-button'>Strikes = {this.state.strikes}</button>
          <button className = 'display-button'>Balls = {this.state.balls}</button>
        </div>

        <div className = 'Dashboard'>
          <button className = 'button' onClick = {this.hit}>HIT</button>
          <button className = 'button' onClick = {this.strike}>STRIKE</button>
          <button className = 'button' onClick = {this.foul}>FOUL</button>
          <button className = 'button' onClick = {this.ball}>BALL</button>
        </div>


      </div>
    );
  }

  strike = () => {
    let inc = this.state.strikes + 1;
    console.log(inc);
    if( inc === 3)
        this.setState ({ strikes: 0, balls: 0 });
    else
        this.setState ({ strikes: inc });
  } // end strike
  
  ball = () => {
    let inc = this.state.balls + 1;
    console.log(inc);
    if( inc === 4)
        this.setState ({ strikes: 0, balls: 0 });
    else
        this.setState ({ balls: inc });
  } // end balls

  foul = () => {
   
    if( this.state.strikes !== 2)
        this.setState ({ strikes: this.state.strikes+1 });
  
  } // end foul

  hit = () => {
    this.setState ({ strikes: 0, balls: 0});
  } // end hit


}


export default App;
