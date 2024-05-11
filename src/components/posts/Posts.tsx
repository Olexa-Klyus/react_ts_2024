import React, {FC, useEffect, useState} from 'react';
import {PostModel} from "../../models/PostModel";
import Post from "../post/Post";
import {getAllPosts} from "../../services/json.api.service";

// interface IPostsProps {
//     posts: PostModel[]
// }
//
// type IPostsPropsType = IPostsProps & { children?: React.ReactNode }

const Posts = () => {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        getAllPosts().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {posts.map((post) => (<Post key={post.id} post={post}/>))}
        </div>
    );
};

export default Posts;