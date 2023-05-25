import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemComponent from "./ItemComponent";
import axios from "axios";
import { setItems } from "./redux/actions/itemActions";
import { store } from "./redux/store"

const ItemListing = () => {
    const items= useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchItems = async () => {
        const response = await axios.get("https://api.nookdata.com/v1/bugs").catch((err) => { //api not working :,v
            console.log("Err", err);
        }); 
        dispatch(setItems(response.data));
    }
    useEffect(() => {
        fetchItems();
    }, []);
    console.log("Items:",  "items")
    return (
        <div className="ui grid container"> 
            <h1>
                <ItemComponent />
            </h1>
        </div>
    )
}

export default ItemListing;