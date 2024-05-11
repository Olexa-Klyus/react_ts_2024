import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import Post from "../post/Post";
import {getAllPosts} from "../../services/json.api.service";


type IPostsPropsType =  {lift?: (postId: number) => void};

const Posts: FC<IPostsPropsType> = ({lift}) => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        getAllPosts().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {posts.map((post) => (<Post key={post.id} post={post} lift={lift}/>))}
        </div>
    );
};

export default Posts;