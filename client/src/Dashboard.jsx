import React from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "./containers/redux/constants/action-types";
import { useHistory, Link } from "react-router-dom";

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
            <h1>Welcome back!</h1>
        <button onClick={handleClick}>Logout</button>
        <Link to="/list"><button>My List</button></Link>
    </div>
    )
}
