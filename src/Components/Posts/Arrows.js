import React from 'react'
import { withStyles, IconButton } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const styles = theme => ({
    left: {
        marginLeft: theme.spacing.unit * 6,
        marginTop: theme.spacing.unit * 4,
    },
    right: {
        marginLeft: theme.spacing.unit,
        marginTop: theme.spacing.unit * 4,
    },
});

class Arrows extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <IconButton className={classes.left} onClick={this.props.onClickLeft}>
                    <KeyboardArrowLeft fontSize="large" />
                </IconButton>
                <IconButton className={classes.right} onClick={this.props.onClickRight} >
                    <KeyboardArrowRight fontSize="large" />
                </IconButton>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Arrows);