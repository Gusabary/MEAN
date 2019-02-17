const defaultState = {
    redirectTo: null,
    //isLoading: false,
}

const common = (state = defaultState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
        case 'SIGN_UP':
        case 'LOG_OUT':
            return {
                redirectTo: '/',
            }
        
        case 'REDIRECTED':
            return {
                redirectTo: null,
            }
        /*case 'ASYNC_START':
            return {
                isLoading: true,
            }*/
        default:
            return state
    }
}

export default common;