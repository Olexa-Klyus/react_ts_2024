import React from 'react';
import Post from "./Post";
import {useStore} from "../context/ContextProvider";

const Posts = () => {

const {postStore:{allPosts}}=useStore();

    return (
        <div>
            {
                allPosts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;