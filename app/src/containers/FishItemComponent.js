import React from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import { store } from "./redux/store"
import FishCard from "./FishCard";

const fishItemComponent = () => {
    const items= useSelector((state) => state.allItems);

    const arr = []


    if(items) {
        for (const fish in items.items){
            arr.push(
                <div className="four column wide" key={fish.id}>
                <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={fish["icon_uri"]} alt={fish["file-name"]} />
                        <div className="content">
                            {/* <div className="header">{bug.name['name-USen']}</div> */}
                            <div className="meta pirce">$ {fish.price}</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>  
            )
        }}
    const moreFish = Object.entries(items.items)
        console.log(moreFish)
    return (
        <>{moreFish.map(fish => <FishCard fish = {fish}/>)}</>
    );
}

export default fishItemComponent;