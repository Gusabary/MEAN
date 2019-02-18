import React from 'react'
import { FormControl, withStyles, InputLabel, Select, MenuItem, Typography } from '@material-ui/core';

const styles = theme => ({
    text: {
        //width: theme.spacing.unit * 15,
        marginTop: theme.spacing.unit * 4,
        marginLeft: theme.spacing.unit * 6,
    },
});

class PostNum extends React.Component {
    render() {
        const { classes, postsPerPage, currentPage, maxPosts } = this.props;
        const firstPost = (currentPage - 1) * postsPerPage + 1;
        const lastPost = (firstPost + postsPerPage - 1 > maxPosts) ? maxPosts : (firstPost + postsPerPage - 1);
        return (
            <React.Fragment>
                <Typography className={classes.text}>
                    {firstPost} - {lastPost} of {maxPosts}
                </Typography>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(PostNum);