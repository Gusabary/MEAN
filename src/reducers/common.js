const defaultState = {
    redirectTo: null,
    //isLoading: false,
}

const common = (state = defaultState, action) => {
    switch (action.type) {
        case 'SIGN_IN'://console.log(1);
            return {    
                redirectTo: '/',
            }
        case 'LOG_OUT':
            //console.log('in');
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