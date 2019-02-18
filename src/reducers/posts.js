const defaultState = {
    maxPosts: 1,
    posts: [],
    isEditing: false,
}

const posts = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {
                maxPosts: action.payload.maxPosts,
                posts: action.payload.posts.reverse(),
            }
        case 'EDIT_START':
            return {
                isEditing: true,
                postId: action.payload.postId,
                //token: action.payload.token,
            }
        case 'EDIT_END':
            return {
                isEditing: false,
            }
        default:
            return state
    }
}

export default posts;