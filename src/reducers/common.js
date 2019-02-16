const defaultState = {
    redirectTo: null,
    //isLoading: false,
}

const common = (state = defaultState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                redirectTo: '/Posts',
            }
        case 'LOG_OUT':
            //console.log('in');
            return {
                redirectTo: '/SignIn',
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