import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bugs } from "./Bugs";

export const List = () => {
    console.log('test')
    const dispatch = useDispatch();
    const lists = useSelector ((state) => state.lists);
    const [allLists, setAllLists] = useState([]);
    useEffect(() => {
        fetch("/listitems")
        .then(r=>r.json())
        .then(lists=>setAllLists(lists))
    },[])
    
    console.log(allLists)

    
    return (

        
        allLists.map((list) => {
            return (
            <div>
                {list.id}
                {bug.title}
            </div>)
        })
     
    )
}
