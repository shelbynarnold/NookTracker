import React, {useState} from "react";


function EditPopup({post, allPosts, setAllPosts, setEditMode}){
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [tag, setTag] = useState(post.tag);


    function handleSubmit(e){
        e.preventDefault();
        fetch(`/forum/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                content: content,
                tag: tag,
            }),
        })
        .then((r) => r.json())
        .then((updatedPost) => {
            const updatedPosts = allPosts.map((post) => {
                if (post.id === updatedPost.id) return updatedPost;
                return post;
            });
            setAllPosts(updatedPosts);
            setEditMode(false);
        });
    }



    return (
        <div className="EditPopup">
            <h1>Edit Post</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" value={title}></input>
                <textarea onChange={(e) => setContent(e.target.value)} className="NewPostBody" placeholder="...What's on your mind?" value={content}></textarea>
                <input onChange={(e) => setTag(e.target.value)} placeholder="Tags" value={tag}></input>
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
    );

}

export default EditPopup;