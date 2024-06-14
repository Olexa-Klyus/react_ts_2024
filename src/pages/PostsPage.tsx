import React, {useEffect} from 'react';
import {useAppDispatch} from "../store";
import {postsActions} from "../store/slices/postSlice";
import Posts from "../components/Posts";

const PostsPage = () => {

    // тут завантажуємо всі пости
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postsActions.getAll())
    }, []);

    return (
        <div>
            <Posts/>
        </div>
    );
};

export default PostsPage;