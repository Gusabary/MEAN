const defaultState = {
    maxPosts: 1,
    posts:[],
}

const posts = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {
                maxPosts: action.payload.maxPosts,
                posts: action.payload.posts.reverse(),
            }
        default:
            return state
    }
}

export default posts;