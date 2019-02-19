import React from 'react'
import { Typography, withStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit * 2,
    },
})

class HomeButton extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Link to="/">
                    <Button>
                        <Typography variant="h5">
                            MEAN
                        </Typography>
                    </Button>
                </Link>
            </div>
        );
    }
}

export default withStyles(styles)(HomeButton);