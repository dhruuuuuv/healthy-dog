import React, { Component } from 'react';
import './App.css'
import AppBar from '@material-ui/core/AppBar';
import Chocolate from './Chocolate.js'


class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar className="App-title">
              <h1>Healthy Dog</h1>
          </AppBar>
          <Chocolate/>
          <h5> source url: <a href="https://www.petful.com/pet-health/how-much-chocolate-toxic-dogs/"> https://www.petful.com/pet-health/how-much-chocolate-toxic-dogs/ </a> </h5>
      </div>
    );
  }
}

export default App;
