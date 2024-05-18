import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import {userApiService} from "../services/api.service";


const PostsPage = () => {

    const {id} = useParams();
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        if (id) {
            userApiService.getPostsOfUser(id)
                .then(value => setPosts(value.data))
        }
    }, [id]);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;