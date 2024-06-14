import React from 'react';
import {useAppSelector} from "../store";
import {postsReducer} from "../store/slices/postSlice";
import Post from "./Post";
import {IPost} from "../models";

const Posts = () => {
    const {posts}= useAppSelector(state => state.postSlice);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;