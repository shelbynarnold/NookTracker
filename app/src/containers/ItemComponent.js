import React from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import { store } from "./redux/store"

const ItemComponent = () => {
    const items= useSelector((state) => state.allItems.item);
    const renderList = items.map((item) => {
        const {id, title, image, price, category} = item;
        return (<div className="four column wide" key={id}>
        <div className="ui link cards">
         <div className="card">
             <div className="image">
                <img src={image} alt={title} />
                 <div className="content">
                     <div className="header">{title}</div>
                     <div className="meta pirce">$ {price}</div>
                     <div className="meta ">{category}</div>
                 </div>
             </div>
         </div>
        </div>
     </div>);
    })
    return (
        <>{renderList}</>
    );
}

export default ItemComponent;