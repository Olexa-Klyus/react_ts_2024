import React from 'react';
import {useAppSelector} from "../store";
import Post from "./Post";

const Posts = () => {
    const {posts}= useAppSelector(state => state.postSlice);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;