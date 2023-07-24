import React from "react";
import { UserContext } from "./App";
import { useDispatch } from "react-redux";
import { ActionTypes } from "./containers/redux/constants/action-types";
import { useHistory, Link } from "react-router-dom";

function NavBar() {
    const { user, setUser } = React.useContext(UserContext);
    const dispatch = useDispatch()
    const history = useHistory()

    const logoutFetch = () => {
        return function logoutFetchThunk(dispatch){
            fetch("/logout", {method: 'DELETE'})
            dispatch({type: ActionTypes.REMOVE_USER})
            history.push("/login")
            setUser(null)
        }
    }
    const handleClick = (e) => {
        dispatch(logoutFetch())
    }
    return (

        <div className="NavBar">
            <div>
                <h1>Nook Tracker</h1>
            </div>
            <div>
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/lists">Lists</Link>
                    <Link to="/forum">Forum</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    { user ? <div className="LogoutButton" onClick={(e) => handleClick(e)}>Logout</div> : <Link to="/login">Login</Link>}
                </span>
            </div>
        </div>
    );
}

export default NavBar;