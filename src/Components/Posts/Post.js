import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, withStyles, Grid, Button, Toolbar } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Create from '@material-ui/icons/Create'
import Delete from '@material-ui/icons/Delete'
//import Create from
import { Link } from 'react-router-dom'
import PermIdentiy from '@material-ui/icons/PermIdentity';

const styles = theme => ({
    padding: {
        marginTop: theme.spacing.unit * 8,
    },
    post: {
        width: '70%',
        marginLeft: '15%',
    },
    title: {
        backgroundColor: theme.palette.primary.main,
    },
    buttons: {
        marginLeft: theme.spacing.unit * 5,
    },
    edit: {
        color: theme.palette.secondary.main,
        //fontWeight: 'bold',
        border: 'solid',
        textDecoration: 'underline',
    },
    delete: {
        marginLeft: theme.spacing.unit * 2,
        color: theme.palette.error.main,
        //fontWeight: 'bold',
        border: 'solid',
        textDecoration: 'underline',
    },
    buttonIcon: {
        marginLeft: -theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    image: {
        width: '85%',
        marginTop: theme.spacing.unit,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        borderLeft: 'solid',
        borderBottom: 'solid',
        borderRight: 'solid',
        borderColor: theme.palette.primary.main,
        borderBottomColor: theme.palette.primary.main,
    },
    text: {
        width: '100%',
        marginRight: theme.spacing.unit,
        wordWrap: 'break-word',
    },
    icon: {
        marginLeft: theme.spacing.unit * 5,
    },
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
    componentWillReceiveProps(nextProps) {
        if (nextProps.isEnglish !== this.props.isEnglish)
            return;
        const isExpanded = this.state.isExpanded
        this.setState({
            isExpanded: isExpanded.fill(false, 0, 10),
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.padding}></div>
                {
                    this.props.posts.map((post, index) =>
                        <ExpansionPanel
                            className={classes.post}
                            onChange={() => this.handleChange(index)}
                            expanded={this.state.isExpanded[index]}
                        >
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                className={this.state.isExpanded[index] && classes.title}
                            >
                                {this.state.isExpanded[index] ?
                                    <Typography variant='h4'>
                                        <Toolbar>
                                            {post.title}
                                            {post.creator === this.props.userId && (
                                                <div className={classes.buttons}>
                                                    <Link to="New">
                                                        <Button
                                                            className={classes.edit}
                                                            onClick={() => this.props.onClickEdit(post._id)}
                                                            variant="outlined"
                                                        >
                                                            <Create className={classes.buttonIcon} />
                                                            {this.props.isEnglish?'Edit':'编辑'}
                                                            </Button>
                                                    </Link>
                                                    <Button
                                                        className={classes.delete}
                                                        onClick={() => this.props.onClickDelete(post._id)}
                                                        variant="outlined"
                                                    >
                                                        <Delete className={classes.buttonIcon} />
                                                        {this.props.isEnglish?'Delete':'删除'}
                                                        </Button>
                                                </div>
                                            )}
                                        </Toolbar>
                                    </Typography> :
                                    <Typography variant='h6'>
                                        {post.title}
                                        {post.creator === this.props.userId && (
                                            <PermIdentiy className={classes.icon} />
                                        )}
                                    </Typography>

                                }
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.content}>
                                <div className={classes.text}>
                                    {parse(post.content)}
                                </div>
                                <img src={post.imagePath} className={classes.image} />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>)
                }
            </React.Fragment>
        );
    }
}

export default (withStyles(styles)(Post));