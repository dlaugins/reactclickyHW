import React, { Component } from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";


class App extends Component {

  state = {
    score: 0,
    topScore: 0
  }

  updateScore = (finished => {
    console.log("updateScore", finished, "score", this.state.score, "topsscore", this.state.topScore)
    if (finished) {
      if (this.state.score > this.state.topScore) {
        console.log("newTopscore", this.props.score)
        let topScore = this.state.score;
        this.setState({ topScore: topScore, score: 0 });
        console.log("topScore", topScore);
      }
      else{
        this.setState({ score: 0 });
      }
    }
    else {
      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
      // console.log("newScore",newScore);
    }
  })
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />

        <Header />
        <Section updateScore={this.updateScore} />
      </div>
    );
  }
}

export default App;
