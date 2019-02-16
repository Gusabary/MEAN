const defaultState = {
    redirectTo: null,
}

const common = (state = defaultState, action)=>{
    switch (action.type) {
        case 'SIGN_IN':
            return {
                redirectTo: '/Posts',
            }
        case 'REDIRECTED':
            return {
                redirectTo: null,
            }
        default:
            return state
    }
}

export default common;