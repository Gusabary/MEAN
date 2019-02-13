import React from 'react'
import { withStyles, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = theme => ({
    icon: {
        marginTop: theme.spacing.unit,
        //marginRight: -theme.spacing.unit * 0.5,
        marginLeft: theme.spacing.unit*2,
    },
    label: {
        marginTop: -theme.spacing.unit * 1.5,
    },
})

class SignUpButton extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AccountCircle className={classes.icon} />
                <a href="SignUp">
                    <Button className={classes.label}>
                        Sign Up
                    </Button>
                </a>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SignUpButton);