import React, { Component } from 'react';
import IdeasContainer from './components/IdeasContainer'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> Idea Board </h1>
        </div>
        <IdeasContainer />
      </div>
    );
  }
}

export default App;
