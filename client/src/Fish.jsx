import React, {useState, useEffect} from "react";

export function Fish() {
    const [fish, setFish] = useState([]);

    useEffect(() => {
        fetch("/lists/fish")
        .then((response) => response.json())
        .then((fish) => setFish(fish));

}, []);

return (
    <section>
        <h1>List of fish</h1>
        {fish.map((fish) => (
            <FishItem key={fish.id} fish={fish}/>
        ))}
        </section>
)}

const FishItem = ({fish}) =>
    <div>
        <p>{fish.title}</p>
        <img src={fish.image} />
        <button>Add fish to list</button>
    </div>