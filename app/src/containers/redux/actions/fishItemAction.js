import { ActionTypes } from "../constants/fishAction-Types"
import axios from "axios";

export const fetchItems = async() => {
const response = await axios.get("/fish");
console.log(response);
    return {
        type:  ActionTypes.SET_ITEMS,
        payload: response,
    }
}

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