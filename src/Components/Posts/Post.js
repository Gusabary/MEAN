import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, withStyles, Grid } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const styles = theme => ({
    post: {
        width: '70%',
        marginLeft: '15%',
    },
    padding: {
        marginTop: theme.spacing.unit * 8,
    },
    image: {
        width: '80%',
        height: '40%',
    }
});

class Post extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.padding}></div>
                <Grid>
                    {
                        this.props.posts.map(post =>
                            <ExpansionPanel className={classes.post}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    {post.title}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {post.content}
                                    <img src={post.imagePath} className={classes.image} />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>)
                    }
                </Grid>
            </React.Fragment>
        );
    }
}

export default (withStyles(styles)(Post));