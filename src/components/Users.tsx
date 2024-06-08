import React from 'react';
import User from "./User";
import {useStore} from "../context/ContextProvider";

const Users = () => {

    const {userStore: {allUsers}} = useStore();

    return (
        <div>
            {
                allUsers.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;