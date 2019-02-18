import React from 'react'
import { Paper, withStyles, TextField, Button } from '@material-ui/core'
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
        marginLeft: theme.spacing.unit * 2,
    },
    image: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 2,
        //marginBottom: theme.spacing.unit*3,
    },
    content: {
        width: '96%',
        marginTop: theme.spacing.unit,
        marginLeft: '2%',
    },
    save: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 3,
    },
});

const mapStateToProps = state => ({
    token: state.user.token,
    redirectTo: state.common.redirectTo,
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (title, image, content, token) =>
        dispatch({ type: 'ADD_POST', payload: agent.Posts.create(title, image, content, token) }),
    onRedirect: () =>
        dispatch({ type: 'REDIRECTED' }),
})

class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            content: ''
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.hanldeContentChange = this.hanldeContentChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        //console.log(event.target.files[0].name)
    }

    hanldeContentChange(event) {
        this.setState({
            content: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, content, image } = this.state;
        this.props.onSubmit(title, image, content, this.props.token);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.props.history.push(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
        const { classes } = this.props;
        //console.log(this.state.image);
        return (
            <React.Fragment>
                <Paper className={classes.root}><form onSubmit={this.handleSubmit} id="myform">
                    <TextField
                        type="text"
                        label="Post Title"
                        className={classes.title}
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    /> <br />
                    <input
                        type="file"
                        //label="Pick Image"
                        //value={this.state.image}
                        onChange={this.handleImageChange}
                    />

                    <br />
                    <TextField
                        type="text"
                        label="Post Content"
                        className={classes.content}
                        value={this.state.content}
                        onChange={this.hanldeContentChange}
                        multiline
                        rows="16"
                    /> <br />

                    <Button
                        variant="contained"
                        className={classes.save}
                        type="submit"
                    >
                        Save Post
                    </Button> <br /></form>
                </Paper>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(New));