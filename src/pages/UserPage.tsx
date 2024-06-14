import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store";
import {userActions} from "../store/slices";
import {postsActions} from "../store/slices/postSlice";
import UserPostPage from "./UserPostPage";

const UserPage = () => {
    let {id} = useParams();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.userSlice);

    useEffect(() => {
        dispatch(userActions.loadUserById(id));

    }, [id]);


    return (
        <div>
            <h3>Пости користувача</h3>
            {user && user.username}
            <UserPostPage/>
        </div>
    );
};

export default UserPage;