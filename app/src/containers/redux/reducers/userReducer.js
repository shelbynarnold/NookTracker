import { ActionTypes } from "../constants/action-types"

const initialState = {
    user: null
}
export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return payload;
        case ActionTypes.REMOVE_USER: 
            return null;    
        default: 
            return state;    
    }
}
