import React from 'react';
import {useAppSelector} from "../redux/store";
import User from "./User";

const Users = () => {

    const {users, isLoaded} = useAppSelector(state => state.userSlice);
    return (
        <div>
            {isLoaded ? users.map(user =>
                    <User key={user.id} user={user}/>)
                : <h2>Loading...</h2>}
        </div>
    );
};

export default Users;