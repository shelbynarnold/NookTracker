import React from 'react';
import PostCard from './PostCard';



function PostCardContainer({allPosts, setAllPosts}){
    console.log(allPosts)

    function handleDelete(id){ 
        fetch(`/forum/${id}`,{
          method: "DELETE"
        })
        .then(r=>r.json())
        .then(deletedPost=>{
          const updatedPosts = allPosts.filter(post=>post.id !== deletedPost.id)
          setAllPosts(updatedPosts)
        })
      }

    if(allPosts === undefined || allPosts.length === 0){
        return <h2>No Posts Yet!</h2>
    }

    const displayPosts = allPosts.map((post) => {
        return <PostCard key={post.id} post={post} handleDelete={handleDelete} allPosts={allPosts} setAllPosts={setAllPosts}/>
    })

    return(
        <div>{displayPosts}</div>
        )
}

export default PostCardContainer;