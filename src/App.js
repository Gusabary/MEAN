import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'
import Detail from './Detail'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Header from './Components/Header/index'
import Posts from './Components/Posts/index'
import New from './Components/New/index'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isLoggedIn: state.log.isLoggedIn,
});

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Header isLoggedIn={this.props.isLoggedIn} />
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
        </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
