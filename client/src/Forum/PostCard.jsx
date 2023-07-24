import React from "react";
import { UserContext } from "../App";
import EditPopup from "./EditPopup";

function PostCard({post, handleDelete, setAllPosts, allPosts}) {
    const { user } = React.useContext(UserContext);
    const [editMode, setEditMode] = React.useState(false);


    return (
        editMode ? <EditPopup post={post} allPosts={allPosts} setAllPosts={setAllPosts} setEditMode={setEditMode}/> :
        <div className="ForumPost">
        <h1>{post.title}</h1>
        <h3>posted by {post.user_id}</h3>
        <p>{post.content}</p>
        <p>{post.tag}</p>
        {user === null ? null: 
        <div className="ForumPostButtons">
            {user.username.toString() === post.user_id.toString() ? <button onClick={() => setEditMode(!editMode)}>Edit Post</button> : null}
            {user.username.toString() === post.user_id.toString() ? <button onClick={() => handleDelete(post.id)}>Delete Post</button> : null}
        </div>
}
        </div>
    );
}

export default PostCard;