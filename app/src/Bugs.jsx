import React, {useState, useEffect} from "react";

export function Bugs() {
    const [bugs, setBugs] = useState([]);
    useEffect(() => {
        fetch("/lists/bugs")
        .then((response) => response.json())
        .then((bugs) => setBugs(bugs));

}, []);


return (
    <section>
        <h1>List of bugs</h1>
        {bugs.map((bug) => (
            <BugItem key={bug.id} bug={bug} />
        ))}
        </section>
)}
const BugItem = ({bug}) => {
    const [list, setList] = useState([])
    const addBugClick = (bug) => {
        
        const newBugObj = {
            item_id:bug.id, 
            title: "no title"
            }
            
            fetch("/list", {
                  method: "POST",
                  headers: {
                    "Content-Type":"application/json",
                  },
                  body:JSON.stringify(newBugObj)
                })
                .then((r)=>r.json())
                .then((newRoute)=>{
                  setList((prevRouteList)=>[...prevRouteList,newRoute])
                } )
    }
    return (
<div>
    <p>{bug.title}</p>
    <img src={bug.image} />
    <button onClick={()=>addBugClick(bug)}>Add bug to list</button>
</div>
    )
}