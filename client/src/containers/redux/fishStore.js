import reducers from "./reducers/fishIndex";
import { createStore } from 'redux';
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const composedEnhancer = composeWithDevTools(
    applyMiddleware()
)

const store = createStore(reducers, composedEnhancer);

export default store;