const user =  (state={}, action) => {
    switch (action.type) {
        case 'SIGN_IN': {
            //console.log(3);
            //let a
            //action.payload.then(v => { a = v.userId; /*console.log(a)*/ })
            //action.payload.then(v => a = (v.userId));
            //a = (async () => (await action.payload).userId)();
            //action.payload.then(v => { a = v.userId; console.log(a) })   
            console.log(1)
            return {
                //console.log(a)
                //...state,
                userId: action.payload.userId,
            }
        }
        case 'SIGN_UP':
            return {

            }
        default:
            return state;
    }
}

export default user;