import React, { Component } from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";


class App extends Component {

state = {
  score:5,
  topScore:10
}

updateScore =finished => {
 if(finished){

 }
 else{
  let newScore = this.state.score + 1;
  this.setState({score:newScore});
 }
}
  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore = {this.state.topScore}/>
        <Header />
        <Section updateScore = {this.updateScore} />
      </div>
    );
  }
}

export default App;
