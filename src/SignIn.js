import React from 'react'
import { Paper, withStyles } from '@material-ui/core';


const styles = theme => ({
    paper: {
        paddingTop: theme.spacing.unit * 20,
        paddingBottom: theme.spacing.unit*20,
        paddingLeft: theme.spacing.unit * 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

class SignIn extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <p>a</p>
                <Paper className={classes.paper}>
                    de
                </Paper>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(SignIn);