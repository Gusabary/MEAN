import React from 'react'
import { withStyles, TextField } from '@material-ui/core';

const styles = theme => ({
    title: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit*2,
    },
});

class Title extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <TextField
                type="text"
                label="Post Title"
                className={classes.title}
            />
        );
    }
}

export default withStyles(styles)(Title);