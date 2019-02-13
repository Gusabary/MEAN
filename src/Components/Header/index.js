import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from '@material-ui/core';
import HomeButton from './HomeButton';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import AddPostButton from './AddPostButton';
import LogOutButton from './LogOutButton';

const styles = theme => ({
    bar: {
        backgroundColor: theme.palette.secondary.main,
    },

    buttons: {
        marginLeft: theme.spacing.unit * 110,
    },

})

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        const whenLoggedIn = (
            <div className={classes.buttons}>
                <AddPostButton />
                <LogOutButton onClick={this.props.onClick} />
            </div>
        );
        const whenLoggedOut = (
            <div className={classes.buttons}>
                <SignInButton onClick={this.props.onClick} />
                <SignUpButton />
            </div>
        );
        return (
            <React.Fragment>
                <AppBar className={classes.bar}>
                    <Toolbar>
                        <HomeButton />
                        {this.state.isLoggedIn ? whenLoggedIn : whenLoggedOut}
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(Header);