import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices";

const UserPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.userSlice.user)
    console.log(user)

    useEffect(() => {
        dispatch(userActions.loadUserById(id));
    }, [id]);

    return (
        <div>
            {user && user.name}
        </div>
    );
};

export default UserPage;
