import React from 'react'
import Post from './Post'
import PostNumSelector from './PostNumSelector';
import PostNum from './PostNum';
import Toolbar from '@material-ui/core/Toolbar'
import Arrows from './Arrows';
import agent from '../../agent'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    maxPosts: state.posts.maxPosts,
    posts: state.posts.posts,
    userId: state.user.userId,
    token: state.user.token,
})

const mapDispatchToProps = dispatch => ({
    onLoad: () =>
        dispatch({ type: 'LOAD_POSTS', payload: agent.Posts.show() }),
    onEdit: (postId) =>
        dispatch({ type: 'EDIT_START', payload: { postId } }),
})

const filter = (posts, postsPerPage, currentPage, maxPosts) => {
    let filteredPosts = [];
    const firstPost = (currentPage - 1) * postsPerPage + 1;
    const lastPost = (firstPost + postsPerPage - 1 > maxPosts) ? maxPosts : (firstPost + postsPerPage - 1);
    posts.map((post, index) => {
        if (index + 1 >= firstPost && index + 1 <= lastPost)
            filteredPosts = filteredPosts.concat(post);
    })
    return filteredPosts;
}

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            postsPerPage: 5,
            currentPage: 1,
        });
        this.handleChange = this.handleChange.bind(this);
        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.handleClickRight = this.handleClickRight.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
    }

    handleChange(event) {
        this.setState({
            postsPerPage: event.target.value,
        });
    }

    handleClickLeft() {
        const { currentPage } = this.state;
        this.setState({
            currentPage: currentPage > 1 ? currentPage - 1 : 1,
        })
    }

    handleClickRight() {
        const { postsPerPage, currentPage } = this.state;
        const maxPage = Math.floor((this.props.maxPosts - 1) / postsPerPage) + 1;
        this.setState({
            currentPage: currentPage < maxPage ? currentPage + 1 : maxPage,
        })
    }

    handleClickEdit(postId) {
        this.props.onEdit(postId);
    }

    componentWillMount() {
        this.props.onLoad();
    }
    render() {
        const { maxPosts, posts, userId, token } = this.props;
        const { postsPerPage, currentPage } = this.state;
        if (!posts)
            return (
                <p>loading...</p>
            )
        else
            return (
                <React.Fragment>
                    <Post
                        posts={filter(posts, postsPerPage, currentPage, maxPosts)}
                        userId={userId}
                        token={token}
                        onClickEdit={(postId) => this.handleClickEdit(postId)}
                    />
                    <Toolbar>
                        <PostNumSelector
                            num={postsPerPage}
                            onChange={this.handleChange}
                        />
                        <PostNum
                            postsPerPage={postsPerPage}
                            currentPage={currentPage}
                            maxPosts={maxPosts}
                        />
                        <Arrows
                            onClickLeft={this.handleClickLeft}
                            onClickRight={this.handleClickRight}
                        />
                    </Toolbar>
                </React.Fragment>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);