import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'
import Detail from './Detail'
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Header from './Components/Header/index'
import Posts from './Components/Posts/index'
import New from './Components/New/index'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Detail" component={Detail} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Posts" component={Posts} />
            <Route exact path="/New" component={New} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
