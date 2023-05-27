import React from "react";
import { Link } from "react-router-dom";

export const Home = () =>
    <div>
        <h1>Welcome to NookTracker!</h1>
    <Link to="/login" className="button">
        <button>Login/Register</button>
    </Link>
    <Link to="/lists" className="button">
        <button>See all Lists</button>
    </Link>
    <Link to="/forum" className="button">
        <button>See Forums</button>
    </Link>
    </div>