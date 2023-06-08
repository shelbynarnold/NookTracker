import React from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "./containers/redux/constants/action-types";
import { useHistory } from "react-router-dom";

export const Dashboard = () => {
const dispatch = useDispatch()
const history = useHistory()

const logoutFetch = () => {
    return function logoutFetchThunk(dispatch){
        fetch("/logout", {method: 'DELETE'})
        dispatch({type: ActionTypes.REMOVE_USER})
        history.push("/")
    }
}

const handleClick = (e) => {
    dispatch(logoutFetch())
}

    return(
        <div>
        <button onClick={handleClick}>Logout</button>
    </div>
    )
}
    