import React, { Component } from 'react';
import './App.css'
import AppBar from '@material-ui/core/AppBar';
import Chocolate from './Chocolate.js'
import General from './General.js'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';


class App extends Component {
    state = {
        value: 0
    }

    handleChange = (event, value) => {
      this.setState({ value });
    };


  render() {
    return (
      <div className="App">

          <AppBar className="">
              <Toolbar>
                 <div className="App-title">
                     <h2>Healthy Dog</h2>
                 </div>
                 <div className="App-tabs">
                     <Tabs value={this.state.value} onChange={this.handleChange}>
                      <Tab label="Chocolate" />
                      <Tab label="General" />
                    </Tabs>
                 </div>
             </Toolbar>
            </AppBar>
            {this.state.value === 0 && <Chocolate/>}
            {this.state.value === 1 && <General/>}
      </div>
    );
  }
}

export default App;
