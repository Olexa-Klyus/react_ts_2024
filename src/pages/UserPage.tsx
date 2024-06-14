import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store";
import {postsActions, userActions} from "../store/slices";
import UserPosts from "../components/UserPosts";

const UserPage = () => {
    let {id} = useParams();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.userSlice);

    useEffect(() => {
        dispatch(userActions.loadUserById(id));
        dispatch(postsActions.getByUserId(id))
    }, [id]);

    return (
        <div>
            <h3>Пости користувача</h3>
            {user && user.username}
            <UserPosts/>
        </div>
    );
};

export default UserPage;