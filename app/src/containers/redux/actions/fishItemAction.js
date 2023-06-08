import { ActionTypes } from "../constants/fishAction-Types"
import fishApi from "../../../apis/fishApi";
import axios from "axios";

export const fetchItems = () => {

return async (dispatch) => {
    const response = await fishApi.get("/fish");

    dispatch({type:ActionTypes.FETCH_ITEMS, payload:response.data})
}}

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