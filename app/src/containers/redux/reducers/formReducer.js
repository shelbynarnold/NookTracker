import { ActionTypes } from "../constants/action-types"

const initialState = {
    posts: []
}
export const formReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_POST:
            return {...state, posts: [...state.posts, payload]};
        default: 
            return state;    
    }
}

