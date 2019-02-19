import React from 'react'
import {  withStyles, CircularProgress, Typography } from '@material-ui/core';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfied';

const styles = theme => ({
    root: {
        marginLeft: '48%',
        marginTop: theme.spacing.unit*12,
    },
    text: {
        marginLeft: -theme.spacing.unit*12,
        marginTop: theme.spacing.unit*4,
    }
});

class NoPostView extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <SentimentDissatisfied fontSize="large" />
                    <Typography variant='h5' className={classes.text}>
                        There is not post now.
                    </Typography>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(NoPostView);