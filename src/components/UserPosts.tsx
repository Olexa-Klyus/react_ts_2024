import React from 'react';
import {useAppSelector} from "../store";
import Post from "./Post";

const UserPosts = () => {
    const {postsUser} = useAppSelector(state => state.postSlice);
    return (
        <div>
            {postsUser && postsUser.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export default UserPosts;