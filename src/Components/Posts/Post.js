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
        width: '85%',
        marginTop: theme.spacing.unit,
    },
    buttons: {
        marginTop: theme.spacing.unit,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    text: {
        width: '100%',
        borderStyle: 'solid',
    }
});

class Post extends React.Component {
    render() {
        const { classes } = this.props;
        //const ReactMarkdown = require('react-markdown');
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
                                <ExpansionPanelDetails className={classes.content}>
                                    <Typography paragraph noWrap className={classes.text}>
                                        {post.content}
                                    </Typography>

                                    <img src={post.imagePath} className={classes.image} />

                                    {post.creator === this.props.userId && (
                                        <div className={classes.buttons}>
                                            <Link to="New">
                                                <Button onClick={() => this.props.onClickEdit(post._id)}>
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button onClick={() => this.props.onClickDelete(post._id)}>
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