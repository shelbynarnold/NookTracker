import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FishItemComponent from "./FishItemComponent";
import { fetchItems } from "./redux/actions/fishItemAction";
import { store } from "./redux/store"

const fishItemListing = () => {
    const items = useSelector((state) => state);
    const dispatch = useDispatch();


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