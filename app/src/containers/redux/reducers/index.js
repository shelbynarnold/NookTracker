import {combineReducers} from 'redux'
import { itemReducer } from './itemReducer'
import { userReducer } from './userReducer';

const reducers = combineReducers({
    allItems: itemReducer, 
    currentUser: userReducer
});

export default reducers