import { combineReducers } from 'redux';

import UserReducer from './users';
import SearchReducer from './search';
import ActiveUserReducer from './active-user';

// combine all reducers 
const allReducers = combineReducers({
    users: UserReducer,
    word: SearchReducer,
    activeUser: ActiveUserReducer
})

export default allReducers;