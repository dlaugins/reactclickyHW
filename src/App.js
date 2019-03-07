import React, { Component } from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;
