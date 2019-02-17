import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Posts/index'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Header from './Components/Header/index'
import New from './Components/New'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  userId: state.user.userId,
});

class App extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <React.Fragment>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/SignIn" component={SignIn} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/New" component={New} />
            </div>
          </BrowserRouter>
        </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
