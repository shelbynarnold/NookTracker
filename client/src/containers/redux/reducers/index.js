import {combineReducers} from 'redux'
import { itemReducer } from './itemReducer'
import { userReducer } from './userReducer';
import { formReducer } from './formReducer'

const reducers = combineReducers({
    allItems: itemReducer, 
    currentUser: userReducer,
    allPost: formReducer
});

export default reducers