import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "./containers/redux/constants/action-types"
import { useHistory } from "react-router-dom";
import { UserContext } from "./App";

export const Login = (props) => {
    const { user, setUser } = React.useContext(UserContext);
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, password: pass }),
        })
          .then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                setUser(user);
                history.push("/dashboard");
              });
            } else {
              r.json().then((err) => setErrors(err.errors))
    
            }
        })
        .catch((error) => console.error(error));
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