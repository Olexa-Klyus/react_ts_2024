import React, {useEffect, useState} from 'react';

import {ITypePostProps} from "../../types";
import {Post} from "../Post/Post";


export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((value) => value.json())
            .then((value) => setPosts(value));
    }, []);

    return (
        <div>
            <h3> Відгуки </h3>
            {posts.map((post: ITypePostProps) => (
                <Post
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    id={post.id}
                />
            ))}
        </div>
    )
}

