import React from 'react'
import { FormControl, withStyles, InputLabel, Select, MenuItem, Typography } from '@material-ui/core';

const styles = theme => ({
    text: {
        //width: theme.spacing.unit * 15,
        marginTop: theme.spacing.unit*4,
        marginLeft: theme.spacing.unit*8,
    },
});

class PostNum extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Typography className={classes.text}>
                    1 - 1 of 1
                </Typography>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(PostNum);