import { ActionTypes } from "../constants/action-types"

const initialState = {
    user: null
}
export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return payload;
        default: 
            return state;    
    }
}