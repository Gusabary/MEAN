import React from 'react'
import { Toolbar } from '@material-ui/core'
import { connect } from 'react-redux';
import agent from '../../agent'
import Post from './Post'
import PostNumSelector from './PostNumSelector';
import PostNum from './PostNum';
import Arrows from './Arrows';
import Loading from './Loading';
import NoPostView from './NoPostView';

const mapStateToProps = state => ({
    maxPosts: state.posts.maxPosts,
    posts: state.posts.posts,
    userId: state.user.userId,
    token: state.user.token,
    isDeleting: state.posts.isDeleting,
    isEnglish: state.common.isEnglish,
})

const mapDispatchToProps = dispatch => ({
    onLoad: () =>
        dispatch({ type: 'LOAD_POSTS', payload: agent.Posts.show() }),
    onEdit: (postId) =>
        dispatch({ type: 'EDIT_START', payload: { postId } }),
    onDeleteStart: () =>
        dispatch({ type: 'DELETE_START' }),
    onDeleteEnd: () =>
        dispatch({ type: 'DELETE_END' }),
    onRedirect: () =>
        dispatch({ type: 'REDIRECTED' }),
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
        this.handleClickDelete = this.handleClickDelete.bind(this);
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

    async handleClickDelete(postId) {
        this.props.onDeleteStart();
        await agent.Posts.delete(postId, this.props.token);
        this.props.onLoad();
    }

    componentWillMount() {
        this.props.onLoad();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.props.history.push(nextProps.redirectTo);
            this.props.onRedirect();
        }
        if (this.props.posts && this.props.posts !== nextProps.posts)
            this.props.onDeleteEnd()
    }
    render() {
        const { maxPosts, posts, userId, token, isDeleting, isEnglish } = this.props;
        const { postsPerPage, currentPage } = this.state;
        if (!posts)
            return (
                <NoPostView />
            )
        else if (isDeleting)
            return (
                <Loading />
            )
        else
            return (
                <React.Fragment>
                    <Post
                        posts={filter(posts, postsPerPage, currentPage, maxPosts)}
                        userId={userId}
                        token={token}
                        onClickEdit={(postId) => this.handleClickEdit(postId)}
                        onClickDelete={(postId) => this.handleClickDelete(postId)}
                        isEnglish={isEnglish}
                    />
                    <Toolbar>
                        <PostNumSelector
                            num={postsPerPage}
                            onChange={this.handleChange}
                            isEnglish={isEnglish}
                        />
                        <PostNum
                            postsPerPage={postsPerPage}
                            currentPage={currentPage}
                            maxPosts={maxPosts}
                            isEnglish={isEnglish}
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