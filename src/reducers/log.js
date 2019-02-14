const defaultState = {
    isLoggedIn: false,
}

const log = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true,
            }
        case 'LOGOUT':
            return {
                isLoggedIn: false,
            }
        default:
            return state;
    }
}

export default log;