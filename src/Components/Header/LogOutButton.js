import React from 'react'
import { withStyles, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = theme => ({
    icon: {
        marginTop: theme.spacing.unit,
        //marginRight: -theme.spacing.unit * 0.5,
        marginLeft: theme.spacing.unit * 2,
    },
    label: {
        marginTop: -theme.spacing.unit * 1.5,
    },
})

class LogOutButton extends React.Component {
    render() {
        const { classes, onClick } = this.props;
        return (
            <React.Fragment>
                <AccountCircle className={classes.icon} />
                <a href="SignUp">
                    <Button className={classes.label} onClick={onClick}>
                        Log Out
                    </Button>
                </a>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(LogOutButton);