const user = (state = {}, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                userId: action.payload.userId,
            }
        case 'SIGN_UP':
            return {

            }
        case 'LOG_OUT':
            //console.log('ha');
            return {
                userId: state.userId,
            }
        default:
            return state;
    }
}

export default user;