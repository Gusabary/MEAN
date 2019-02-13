import React from 'react'
import { Paper, withStyles, Typography, Toolbar, TextField, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 55,
        marginLeft: theme.spacing.unit * 55,
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 6,
        //paddingLeft: theme.spacing.unit * 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        paddingLeft: theme.spacing.unit * 2
    },
    textField: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: -theme.spacing.unit * 5,
        marginRight: -theme.spacing.unit * 5,
        width: '70%',
    },
    button: {
        marginTop: theme.spacing.unit * 7,
    },
});

class SignIn extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.paper}>
                    <Toolbar>
                        <AccountCircle fontSize="large" />
                        <Typography variant="h4" className={classes.text} >
                            Sign In
                        </Typography>
                    </Toolbar>
                    <TextField
                        type="email"
                        label="Email Address"
                        className={classes.textField}
                        required
                    />
                    <TextField
                        type="password"
                        label="Password"
                        className={classes.textField}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.button}
                    >
                        <Typography>
                            Sign In
                        </Typography>
                    </Button>
                </Paper>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(SignIn);