import React, { Component } from 'react';
import MainPage from './components'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <MainPage />
    </MuiThemeProvider>
    );
  }
}

export default App;
