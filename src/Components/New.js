import React from 'react'
import { Paper, withStyles, TextField, Button, Typography } from '@material-ui/core'
import { connect } from 'react-redux';
import agent from '../agent';

const styles = theme => ({
    root: {
        width: '82%',
        marginLeft: '9%',
        marginTop: theme.spacing.unit * 3,
    },
    title: {
        marginTop: theme.spacing.unit,
        marginLeft: '2%',
    },
    imageButton: {
        marginTop: theme.spacing.unit,
        marginLeft: '2%',
        backgroundColor: theme.palette.primary.light,
    },
    image: {
        width: theme.spacing.unit * 30,
        //height: theme.spacing.unit*10,
    },
    previewButton: {
        marginTop: theme.spacing.unit,
        //position: 'absolute',
        marginLeft: '79%',
        backgroundColor: theme.palette.primary.light,
    },
    hidden: {
        display: 'none',
    },
    content: {
        width: '96%',
        marginTop: theme.spacing.unit,
        marginLeft: '2%',
    },
    preview: {
        width: '96%',
        marginTop: theme.spacing.unit,
        marginLeft: '2%',
        //height: theme.spacing.unit * 37,
    },
    save: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: '2%',
        backgroundColor: theme.palette.primary.light,
    },
});

const mapStateToProps = state => ({
    token: state.user.token,
    redirectTo: state.common.redirectTo,
    isEditing: state.posts.isEditing,
    postId: state.posts.postId,
    isEnglish: state.common.isEnglish,
    index: state.posts.index,
    posts:state.posts.posts,
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (title, image, content, token, isEditing, postId) => {
        isEditing ?
            dispatch({ type: 'EDIT_END', payload: agent.Posts.update(postId, title, content, image, token) }) :
            dispatch({ type: 'ADD_POST', payload: agent.Posts.create(title, content, image, token) })
    },
    onRedirect: () =>
        dispatch({ type: 'REDIRECTED' }),
})

const parse = content => {
    const ReactMarkdown = require('react-markdown');
    const splitedContent = content.split('\n');
    return splitedContent.map(para =>
        <p><ReactMarkdown source={para} /></p>
    )
}

class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            content: '',
            showPreview: false,
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.hanldeContentChange = this.hanldeContentChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickPreview = this.handleClickPreview.bind(this);
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value,
        })
    }

    handleImageChange(event) {
        this.setState({
            image: event.target.files[0],
        })
        console.log(this.state.image)
    }

    hanldeContentChange(event) {
        this.setState({
            content: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, content, image } = this.state;
        this.props.onSubmit(title, image, content, this.props.token, this.props.isEditing, this.props.postId);
    }

    componentWillMount() {
        if (this.props.isEditing)
            this.setState({
                title: this.props.posts[this.props.index].title,
                //image: this.props.posts[this.]
                content: this.props.posts[this.props.index].content,
            })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.props.history.push(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    handleClickPreview() {
        this.setState({
            showPreview: !this.state.showPreview,
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            type="text"
                            label={this.props.isEnglish ? 'Post Title' : '文章标题'}
                            className={classes.title}
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                        <br />
                        <Button
                            variant="contained"
                            className={classes.imageButton}
                            onClick={() => this.imagePicker.click()}
                        >
                            {this.props.isEnglish ? 'Pick Image' : '选择图片'}
                        </Button>
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            ref={ref => this.imagePicker = ref}
                            //value={this.state.image}
                            onChange={this.handleImageChange}
                            className={classes.hidden}
                        />
                        <Button
                            variant="contained"
                            onClick={this.handleClickPreview}
                            className={classes.previewButton}
                        >
                            {this.state.showPreview && this.props.isEnglish && 'Writing'}
                            {!this.state.showPreview && this.props.isEnglish && 'Preview'}
                            {this.state.showPreview && !this.props.isEnglish && '编辑'}
                            {!this.state.showPreview && !this.props.isEnglish && '预览'}
                        </Button>
                        <br />
                        <TextField
                            type="text"
                            label={this.props.isEnglish ? 'Post Content' : '正文内容'}
                            className={this.state.showPreview ? classes.hidden : classes.content}
                            value={this.state.content}
                            onChange={this.hanldeContentChange}
                            multiline
                            rows="16"
                        />
                        <Typography className={this.state.showPreview ? classes.preview : classes.hidden}>
                            {parse(this.state.content)}
                        </Typography>
                        <br />
                        <Button
                            variant="contained"
                            className={classes.save}
                            type="submit"
                        >
                            {this.props.isEnglish ? 'Save Post' : '保存文章'}
                        </Button>

                        <br />
                    </form>
                </Paper>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(New));