import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, withStyles, Grid, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from 'react-router-dom'

const styles = theme => ({
    padding: {
        marginTop: theme.spacing.unit * 8,
    },
    post: {
        width: '70%',
        marginLeft: '15%',
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
        //borderStyle: 'solid',
        marginRight: theme.spacing.unit,
        wordWrap: 'break-word',
        //wordBreak: 'break-all',
    },
    title: {
        backgroundColor: theme.palette.primary.main,
    }
});

const parse = content => {
    const ReactMarkdown = require('react-markdown');
    const splitedContent = content.split('\n');
    return splitedContent.map(para =>
        <p><ReactMarkdown source={para} /></p>
    )
}

class Post extends React.Component {
    constructor(props) {
        super(props);
        let modelArray = [];
        modelArray[0] = false;
        modelArray[10] = false;
        modelArray.fill(false, 0, 10);
        this.state = {
            isExpanded: modelArray,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(index) {
        const isExpanded = this.state.isExpanded
        this.setState({
            isExpanded: isExpanded.fill(!isExpanded[index], index, index + 1),
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.padding}></div>
                {
                    this.props.posts.map((post, index) =>
                        <ExpansionPanel className={classes.post} onChange={() => this.handleChange(index)}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={this.state.isExpanded[index] && classes.title}>
                                <Typography variant={this.state.isExpanded[index] ? 'h4' : 'h6'}>
                                    {post.title}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.content}>
                                <div className={classes.text}>
                                    {parse(post.content)}
                                </div>
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
            </React.Fragment>
        );
    }
}

export default (withStyles(styles)(Post));