import React, {useEffect} from 'react';
import Users from "../components/Users";
import {useAppDispatch} from "../store/store";
import {userActions} from "../store/slices/userSlice";

const UsersPage = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div>
            <Users/>
        </div>
    );
};

export default UsersPage;