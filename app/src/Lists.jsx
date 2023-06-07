import React from "react";
import { Link } from "react-router-dom";

export const Lists = () =>
    <div>
        <h1>See all <Link to="/lists/fish"><button>Fish</button></Link></h1>
        <h1>See all <Link to="/lists/bugs"><button>Bugs</button></Link></h1>
    </div>