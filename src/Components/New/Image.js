import React from 'react'
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
    button: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit*2,
        //marginBottom: theme.spacing.unit*3,
    },
});

class Title extends React.Component{
    render() {
        const { classes } = this.props;
        return (
            <Button
                variant="contained"
                className={classes.button}
            >
                Pick Image
            </Button>
        );
    }
}

export default withStyles(styles)(Title);