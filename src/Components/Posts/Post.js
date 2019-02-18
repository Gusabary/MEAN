import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, withStyles, Grid, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from 'react-router-dom'

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
    },
    buttons: {
        marginTop: theme.spacing.unit,
    },
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
                                    {post.creator === this.props.userId && (
                                        <div className={classes.buttons}>
                                            <Link to="New">
                                                <Button onClick={()=>this.props.onClickEdit(post._id)}>
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button>
                                                Delete
                                            </Button>
                                        </div>
                                    )}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>)
                    }
                </Grid>
            </React.Fragment>
        );
    }
}

export default (withStyles(styles)(Post));