import React from 'react';
import LoggedInView from './LoggedInView'
import LoggedOutView from './LoggedOutView'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    userId: state.user.userId,
    isEnglish: state.common.isEnglish,
})

const mapDispatchToProps = dispatch => ({
    onLanguageChange: () =>
        dispatch({ type: "CHANGE_LANGUAGE" }),
})

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onLanguageChange();
    }

    render() {
        //console.log(this.props.userId);
        return (
            <React.Fragment>
                {this.props.userId ?
                    <LoggedInView onClick={this.handleClick} isEnglish={this.props.isEnglish} /> :
                    <LoggedOutView onClick={this.handleClick} isEnglish={this.props.isEnglish} />}
            </React.Fragment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);