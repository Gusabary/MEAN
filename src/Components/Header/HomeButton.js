import React from 'react'
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit * 2,
    },
})

class HomeButton extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Typography variant="h5" className={classes.root}>
                <a href="Posts">
                    MEAN
                </a>
            </Typography>
        );
    }
}

export default withStyles(styles)(HomeButton);