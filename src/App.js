import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'
import Detail from './Detail'
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme'
import SignIn from './SignIn'
import SignUp from './SignUp'
import TopBar from './TopBar'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <TopBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/Detail" component={Detail} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
