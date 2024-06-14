import React from 'react';
import {useAppSelector} from "../store/store";
import User from "./User";

const Users = () => {
    const {users, isLoaded} = useAppSelector(state => state.userSlice)
    return (
        <div>
            {
                isLoaded ? users.map(user => <User key={user.id} user={user}/>)
                    : <h3>loading...</h3>
            }
        </div>
    );
};

export default Users;