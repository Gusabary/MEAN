import React from 'react'
import { withStyles } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const styles = theme => ({
    left: {
        marginLeft: theme.spacing.unit * 6,
        marginTop: theme.spacing.unit*4,
    },
    right: {
        marginLeft: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit*4,
    },
});

class Arrows extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <KeyboardArrowLeft className={classes.left} />
                <KeyboardArrowRight className={classes.right} />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Arrows);