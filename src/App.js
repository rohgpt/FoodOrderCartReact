
import React, { Component } from 'react';

import './App.css';
import Counters from './news/index'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Counters className="item"></Counters>

      </div>
    );
  }
}

export default App;
