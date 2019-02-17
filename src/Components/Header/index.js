import React from 'react';
import LoggedInView from './LoggedInView'
import LoggedOutView from './LoggedOutView'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    userId: state.user.userId,
})

class Header extends React.Component {
    render() {
        //console.log(this.props.userId);
        return (
            <React.Fragment>  
                {this.props.userId ? <LoggedInView /> : <LoggedOutView />}
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps)(Header);