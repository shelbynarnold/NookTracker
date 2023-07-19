import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "./containers/redux/constants/action-types"
import { useHistory } from "react-router-dom";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)

    const loginFetch = () => {
        return function loginFetchThunk(dispatch){
            fetch("/login", {method:'POST',
             body:JSON.stringify(
                {username: username, password: pass}),
            headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .then(data => dispatch({type: ActionTypes.SET_USER, payload: data}))
            history.push("/dashboard")
            
        }
    }
    
        

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(loginFetch())
        
    //         fetch("/login", {method:'POST',
    //          body:JSON.stringify(
    //             {username: username, password: pass}),
    //         headers: {"Content-Type":"application/json"}
    //         })
    //         .then(response => response.json())
    //         .then(data => dispatch({type: ActionTypes.SET_USER, payload: data}))
            
        }
        
    return (
    <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="username">username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username"/>
            <label for="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>
    </div>    
    )
        }