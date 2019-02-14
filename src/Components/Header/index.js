import React from 'react';
import LoggedInView from './LoggedInView'
import LoggedOutView from './LoggedOutView'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    onClick: type =>
        dispatch({ type }),
})

class Header extends React.Component {
    render() {
        const { isLoggedIn } = this.props;
        return (
            <React.Fragment>  
                {isLoggedIn ? <LoggedInView onClick={()=>this.props.onClick("LOGOUT")} /> : <LoggedOutView />}
            </React.Fragment>
        );
    }
}
export default connect(()=>({}),mapDispatchToProps)(Header);