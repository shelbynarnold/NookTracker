import React from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import { store } from "./redux/store"
import BugCard from "./BugCard";

const ItemComponent = () => {
    const items= useSelector((state) => state.allItems);

    const arr = []


    if(items) {
        for (const bug in items.items){
            arr.push(
                <div className="four column wide" key={bug.id}>
                <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={bug["icon_uri"]} alt={bug["file-name"]} />
                        <div className="content">
                            {/* <div className="header">{bug.name['name-USen']}</div> */}
                            <div className="meta pirce">$ {bug.price}</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>  
            )
        }}
    const moreBugs = Object.entries(items.items)
        console.log(moreBugs)
    return (
        <>{moreBugs.map(bug => <BugCard bug = {bug}/>)}</>
    );
}

export default ItemComponent;