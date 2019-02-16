import { createStore, combineReducers, applyMiddleware } from 'redux';
import user from './reducers/user';
import promiseMiddleware from './middleware';
  
const reducer = combineReducers({
    user,
});

const enhancer = applyMiddleware(promiseMiddleware)

const store = createStore(reducer,{},enhancer);

export default store;