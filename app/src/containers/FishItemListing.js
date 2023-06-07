import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FishItemComponent from "./FishItemComponent";
import axios from "axios";
import { setItems, fetchItems } from "./redux/actions/fishItemAction";
import { store } from "./redux/store"

const fishItemListing = () => {
    const items = useSelector((state) => state);
    const dispatch = useDispatch();

    // const fetchItems = async () => {
    //     const response = await axios.get("https://acnhapi.com/v1/fish").catch((err) => {
    //     }); 
    //     dispatch(setItems(response.data));
    // }


    useEffect(() => {
        dispatch(fetchItems());
    }, []);
    return (
        <div className="ui grid container"> 
            <h1>
                 <div>
                    <FishItemComponent  />
                 </div>
            </h1>
        </div>
    )
}

export default fishItemListing;