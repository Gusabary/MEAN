import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, withStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import agent from '../../agent'
import { connect } from 'react-redux';

const styles = theme => ({
    post: {
        width: '70%',
        marginLeft: '15%',
    },
    padding: {
        marginTop: theme.spacing.unit * 8,
    },
});

const mapStateToProps = state => ({
    maxPosts: state.posts.maxPosts,
    posts: state.posts.posts,
})

const mapDispatchToProps = dispatch => ({
    onLoad: () =>
        dispatch({ type: 'LOAD_POSTS', payload: agent.Posts.show() }),
})

class Post extends React.Component {
    /*constructor(props) {
        super(props);
    }*/
    componentWillMount() {
        this.props.onLoad();
        //console.log(this.props.maxPosts)
        console.log(this.props.posts)
    }
    render() {
        const { classes } = this.props;
        console.log(this.props.posts)
        if (!this.props.posts)
            return (
                <p>loading...</p>
            )
        else
        return (
            <React.Fragment>
                <div className={classes.padding}></div>
                
                {
                    this.props.posts.map(post =>
                    <ExpansionPanel className={classes.post}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            {this.props.maxPosts}
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            2
                        </ExpansionPanelDetails>
                    </ExpansionPanel>)
                }
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Post));