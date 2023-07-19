import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "./containers/redux/constants/action-types";

export const PostForm = (props) => {
  const [title, setTitle] = useState("");  
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts); 
  const [allPosts, setAllPosts] = useState([]);
  useEffect(()=>{
    fetch("/forum")
    .then(r=>r.json())
    .then(posts=>setAllPosts(posts))
  },[])

  const displayPosts = allPosts.map((post) => {
    return (
        <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>{post.tag}</p>
        <button onClick={((event) => handlePatch(event))}>Edit Post</button>
        <button onClick={((event) => handleDelete(event))}>Delete Post</button>
        </div>
    )
  })

  function handlePatch

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/forum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    })
      .then((r) => r.json())
      .then((newPost) =>
        dispatch({ type: ActionTypes.SET_POST, payload: newPost })
      );
  }

  return (
    <div>
      <h1>Welcome to the Forums</h1>
      <label>
        <h3>Start a post here!:</h3>
        <form onSubmit={handleSubmit}>
          <input value={title}onChange={(e) => setTitle(e.target.value)}></input>
          <input value={content}onChange={(e) => setContent(e.target.value)}></input>
          <input value={tag}onChange={(e) => setTag(e.target.value)}></input>
          <button type="submit">Submit</button>
        </form>
      </label>

      <div>
        {displayPosts}
      </div>
    </div>
  );
};
