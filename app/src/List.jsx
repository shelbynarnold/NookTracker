import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const List = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const lists = useSelector ((state) => state.lists);
    const [allLists, setAllLists] = useState([]);
    useEffect(() => {
        fetch("/list")
        .then(r=>r.json())
        .then(lists=>setAllLists(lists))
    },[])

const displayLists = allLists.map((list) => {
    return (
        <div>
            <p>{list.title}</p>
            <button>Edit List</button>
            <button>Delete List</button>
        </div>
    )
})


}
