import React, {useState, useEffect} from "react";

export function Bugs() {
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        fetch("/lists/bugs")
        .then((response) => response.json())
        .then((bugs) => setBugs(bugs));

}, []);

return (
    <section>
        <h1>List of bugs</h1>
        {bugs.map((bug) => (
            <BugItem key={bug.id} bug={bug} />
        ))}
        </section>
)}

const BugItem = ({bug}) =>
    <div>
        <p>{bug.title}</p>
        <img src={bug.image} />
        <button>Add bug to list</button>
    </div>