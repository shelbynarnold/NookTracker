import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const List = () => {
    const dispatch = useDispatch();
    const lists = useSelector ((state) => state.lists);
    const [allLists, setAllLists] = useState([]);
    useEffect(() => {
        fetch("/listitems")
        .then(r=>r.json())
        .then(lists=>setAllLists(lists))
    },[])

const displayLists = allLists.map((list) => {
    return (
        <div>
            {list.id}
        </div>
    )
})


}
