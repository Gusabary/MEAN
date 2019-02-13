import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import HomeButton from './HomeButton';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import AddPostButton from './AddPostButton';
import LogOutButton from './LogOutButton';
import { Button } from '@material-ui/core';

const styles = theme => ({
    bar: {
        backgroundColor: theme.palette.secondary.main,
    },

    buttons: {
        marginLeft: theme.spacing.unit * 108,
    },

})

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        const whenLoggedIn = (
            <div className={classes.buttons}>
                <AddPostButton />
                <LogOutButton />
            </div>
        );
        const whenLoggedOut = (
            <div className={classes.buttons}>
                <SignInButton />
                <SignUpButton />
            </div>
        );
        return (
            <React.Fragment>
                <AppBar position="static" className={classes.bar}>
                    <Toolbar>
                        <HomeButton />
                        {whenLoggedOut}
                    </Toolbar>
                </AppBar>



            </React.Fragment>
        );
    }
}
export default withStyles(styles)(Header);