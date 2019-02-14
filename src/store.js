import { createStore, combineReducers } from 'redux';
import log from './reducers/log';

  
const reducer = combineReducers({
    log,
});
  
const store = createStore(reducer, {});

export default store;