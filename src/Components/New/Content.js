import React from 'react'
import { withStyles, TextField } from '@material-ui/core';

const styles = theme => ({
    content: {
        width: '96%',
        marginTop: theme.spacing.unit,
        marginLeft: '2%',
    },
});

class Content extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <TextField
                type="text"
                label="Post Content"
                className={classes.content}
                multiline
                rows="16"
            />
        );
    }
}

export default withStyles(styles)(Content);