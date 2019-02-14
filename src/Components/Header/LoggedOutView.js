import React from 'react';
import { Link, withStyles, Button, AppBar, Toolbar } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeButton from './HomeButton';

const styles = theme => ({
    icon: {
        marginTop: theme.spacing.unit,
        //marginRight: -theme.spacing.unit * 0.5,
        marginLeft: theme.spacing.unit,
    },
    label: {
        marginTop: -theme.spacing.unit * 1.5,
    },
    bar: {
        backgroundColor: theme.palette.secondary.main,
    },

    buttons: {
        marginLeft: theme.spacing.unit * 108,
    },
})

class LoggedInView extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <HomeButton />
                    <div className={classes.buttons}>
                        <AccountCircle className={classes.icon} />
                        <Link href="SignIn">
                            <Button className={classes.label}>
                                Sign In
                        </Button>
                        </Link>
                        <AccountCircle className={classes.icon} />
                        <Link href="SignUp">
                            <Button onClick={this.props.onClick} className={classes.label}>
                                Sign Up
                        </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(LoggedInView);