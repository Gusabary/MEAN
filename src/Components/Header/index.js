import React from 'react';
import LoggedInView from './LoggedInView'
import LoggedOutView from './LoggedOutView'
import { connect } from 'react-redux';

/*const mapDispatchToProps = dispatch => ({
    onClick: type =>
        dispatch({ type }),
})*/

class Header extends React.Component {
    render() {
        console.log(this.props.userId);
        return (
            <React.Fragment>  
                {this.props.userId ? <LoggedInView /> : <LoggedOutView />}
            </React.Fragment>
        );
    }
}
export default (Header);