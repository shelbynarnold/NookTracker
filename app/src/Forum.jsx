import React, { useState } from "react";

// if user(currentUser):
//     return <h1>
//         <Dashboard />
//     </h1>

function PostForm({ userID, forumID, onAddPost }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/forum", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title, 
                content: content,
                user_id: userID,
                forum_id: forumID,
            })
        })
        .then((r) => r.json())
        .then((newPost) => onAddPost(newPost));
    }
    return <form onSubmit={handleSubmit} />
}

export const Forum = () =>
    <div>
        <h1>Welcome to the Forums</h1>
        <label>
            <h3>Start a post here!:</h3> <textarea />
        </label>
    </div>