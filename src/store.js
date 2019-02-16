import { createStore, combineReducers, applyMiddleware } from 'redux';
import user from './reducers/user';
import promiseMiddleware from './middleware';
import common from './reducers/common';

const reducer = combineReducers({
    common,
    user,
});

const enhancer = applyMiddleware(promiseMiddleware)

const store = createStore(reducer,{},enhancer);

export default store;