import React, {useEffect} from 'react';
import Users from "../components/Users";
import {useAppDispatch} from "../store";
import {userActions} from "../store/slices";

const UsersPage = () => {

    // тут завантажуємо всіх юзерів
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