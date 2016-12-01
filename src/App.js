import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';


import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <TextField
            hintText="Enter your name"
            floatingLabelText="Your Name"
          /><br />
          <TextField
            hintText="Enter his name"
            floatingLabelText="His Name"
          /><br />

          <RaisedButton label="Calculate" secondary={true} style={{ margin: 12, }} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
