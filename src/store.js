import { createStore, combineReducers } from 'redux';
import user from './reducers/user';

  
const reducer = combineReducers({
    user,
});
  
const store = createStore(reducer, { user: { userId: 1 } });

export default store;