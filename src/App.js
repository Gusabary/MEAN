import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Header from './Components/Header/index'
import Posts from './Components/Posts/index'
import New from './Components/New/index'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  userId: state.user.userId,
});

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
          <Header userId={this.props.userId} />
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} />
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
