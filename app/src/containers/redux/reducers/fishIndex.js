import {combineReducers} from 'redux'
import { fishItemReducer } from './fishItemReducer'

const reducers = combineReducers({
    allItems: fishItemReducer,
});

export default reducers