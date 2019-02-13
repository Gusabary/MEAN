import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from '@material-ui/core';

const styles = theme => ({
    bar: {
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        paddingLeft: theme.spacing.unit * 2,
    },
    button: {
        marginLeft: theme.spacing.unit * 100,
    },
    icon: {
        marginTop: theme.spacing.unit,
        marginRight: -theme.spacing.unit * 0.5,
        marginLeft: theme.spacing.unit,
    },
    label: {
        marginTop: -theme.spacing.unit * 1.5,
    },
})

function TopBar(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <AppBar className={classes.bar}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        MEAN
                    </Typography>
                    <div className={classes.button}>
                        <Home className={classes.icon} />
                        <a href="Detail">
                            <Button className={classes.label}>
                                Detail
                            </Button>
                        </a>
                        <AccountCircle className={classes.icon} />
                        <a href="SignIn">
                            <Button className={classes.label}>
                                Sign In
                            </Button>
                        </a>
                        <AccountCircle className={classes.icon} />
                        <a href="SignUp">
                            <Button className={classes.label}>
                                Sign Up
                            </Button>
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default withStyles(styles)(TopBar);