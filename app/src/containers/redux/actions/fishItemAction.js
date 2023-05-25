import { ActionTypes } from "../constants/fishAction-Types"
export const setItems = (items) => {
    return {
        type:  ActionTypes.SET_ITEMS,
        payload: items,
    }
}

export const selectedItem = (item) => {
    return {
        type:  ActionTypes.SELECTED_ITEM,
        payload: item,
    }
}