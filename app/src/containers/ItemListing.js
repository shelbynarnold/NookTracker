import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemComponent from "./ItemComponent";
import axios from "axios";
import { setItems } from "./redux/actions/itemActions";
import { store } from "./redux/store"

const ItemListing = () => {
    const items = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchItems = async () => {
        const response = await axios.get("https://acnhapi.com/v1/bugs").catch((err) => {
        }); 
        dispatch(setItems(response.data));
    }
    useEffect(() => {
        fetchItems();
    }, []);
    return (
        <div className="ui grid container"> 
            <h1>
                 <div>
                    <ItemComponent  />
                 </div>
            </h1>
        </div>
    )
}

export default ItemListing;