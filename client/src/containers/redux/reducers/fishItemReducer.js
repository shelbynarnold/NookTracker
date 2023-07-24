import { ActionTypes } from "../constants/fishAction-Types"

const initialState = {
    items: []
}
export const fishItemReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ITEMS:
            return {...state, items: payload};
        case ActionTypes.FETCH_ITEMS:
            return {...state, items: payload};
        default: 
            return state;    
    }
}